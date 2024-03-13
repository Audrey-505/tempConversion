document.addEventListener('DOMContentLoaded', function (){
    const form = document.getElementById('tempForm') as HTMLFormElement;
    const conversion = document.getElementById('result') as HTMLDivElement;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form)
        const degrees = formData.get('userInput') as string;
        const tempType = formData.get('temperature') as string;

        // if(!degrees){
        //     console.log("please enter a value to convert")
        //     return;
        // }

        validate(degrees);

        let convertedValue: number = 0;

        if( tempType.valueOf() === "celsius"){
            const num = parseInt(degrees)
            convertedValue = fahrenheitToCelsius(num);
        }

        if( tempType.valueOf() === "fahrenheit"){
            const num = parseInt(degrees)
            convertedValue = celsiusToFahrenheit(num);
        }

        conversion.innerHTML = `Converted Temperature: ${convertedValue.toFixed(2)}`;
        
    })

    function fahrenheitToCelsius(fahrenheit: number): number {
        return (fahrenheit - 32) * (5/9);
    }

    function celsiusToFahrenheit(celsius: number): number {
        return (celsius * (9/5)) + 32;
    }

    function validate(input: string){
        const regex = /\D/;
        if(regex.test(input) || input == ""){
            conversion.innerHTML = "Please enter non-numeric characters to convert"
        }
    }

})