export function updateHTMLWithWeatherInfo(apiResponse) {
    const cityNameElement = document.getElementById('cityNameScreen');
    const temperatureElement = document.getElementById('temperatureScreen');
    const humidityElement = document.getElementById('humidityScreen');
    const windSpeedElement = document.getElementById('windSpeedScreen');
    const descriptionElement = document.getElementById('descriptionScreen');

    if (cityNameElement && temperatureElement && humidityElement && windSpeedElement && descriptionElement) {
        cityNameElement.textContent = apiResponse.data.results.city;
        temperatureElement.textContent = apiResponse.data.results.temp;
        humidityElement.textContent = apiResponse.data.results.humidity;
        windSpeedElement.textContent = apiResponse.data.results.wind_speedy;
        descriptionElement.textContent = apiResponse.data.results.description;
    } else {
        alert("Erro to update HTML with weather info.");
    }
}