function convertTemperature() {
    const temperature = parseFloat(
        document.getElementById("temperature").value
    );

    const unit = document.getElementById("unit").value;
    const result = document.getElementById("result");

    if (isNaN(temperature)) {
        result.textContent = "Please enter a valid temperature.";
        return;
    }

    let celsius, fahrenheit, kelvin;

    if (unit === "C") {
        celsius = temperature;
        fahrenheit = (temperature * 9 / 5) + 32;
        kelvin = temperature + 273.15;
    } 
    else if (unit === "F") {
        fahrenheit = temperature;
        celsius = (temperature - 32) * 5 / 9;
        kelvin = celsius + 273.15;
    } 
    else {
        kelvin = temperature;
        celsius = temperature - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
    }

    if (kelvin < 0) {
        result.textContent = "Temperature cannot be below absolute zero.";
        return;
    }

    result.innerHTML =
        `${celsius.toFixed(2)} °C<br>` +
        `${fahrenheit.toFixed(2)} °F<br>` +
        `${kelvin.toFixed(2)} K`;
}