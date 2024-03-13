document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('tempForm');
    var conversion = document.getElementById('result');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var formData = new FormData(form);
        var degrees = formData.get('userInput');
        var tempType = formData.get('temperature');
        validate(degrees);
        var convertedValue = convert(tempType, degrees);
        // let convertedValue: number = 0;
        // if( tempType.valueOf() === "celsius"){
        //     const num = parseInt(degrees)
        //     convertedValue = fahrenheitToCelsius(num);
        // }
        // if( tempType.valueOf() === "fahrenheit"){
        //     const num = parseInt(degrees)
        //     convertedValue = celsiusToFahrenheit(num);
        // }
        conversion.innerHTML = "Converted Temperature: ".concat(convertedValue.toFixed(2));
    });
    function fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * (5 / 9);
    }
    function celsiusToFahrenheit(celsius) {
        return (celsius * (9 / 5)) + 32;
    }
    function validate(input) {
        var regex = /\D/;
        if (regex.test(input) || input == "") {
            conversion.innerHTML = "Please enter non-numeric characters to convert";
        }
    }
    function convert(tempType, degrees) {
        var convertedValue = 0;
        if (tempType.valueOf() === "celsius") {
            var num = parseInt(degrees);
            convertedValue = fahrenheitToCelsius(num);
        }
        if (tempType.valueOf() === "fahrenheit") {
            var num = parseInt(degrees);
            convertedValue = celsiusToFahrenheit(num);
        }
        return convertedValue;
    }
});
