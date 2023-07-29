const celciusTl = document.getElementById("Celcius");
const fahrenheitTl = document.getElementById("Fahrenheit");
const kelvinTl = document.getElementById("Kelvin");

function computeTemp(event) {
    const currentValue = event.target.value;

    switch (event.target.name) {
        case "Celcius":
            fahrenheitTl.value = (currentValue * 9 / 5) + 32;
            kelvinTl.value = parseFloat(currentValue) + 273.15;
            break;

        case "Fahrenheit":
            celciusTl.value = (currentValue - 32) * 5 / 9;
            kelvinTl.value = (currentValue - 32) * 5 / 9 + 273.15;
            break;

        case "Kelvin":
            celciusTl.value = currentValue - 273.15;
            fahrenheitTl.value = (currentValue - 273.15) * 9 / 5 + 32;
            break;

        default:
            break;
    }
}
