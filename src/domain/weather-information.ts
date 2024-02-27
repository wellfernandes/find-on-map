import { ApiHgbrModel } from "../models/api-hgbr-model";
import { ApiOpenWeatherModel } from "../models/api-open-weather-model";
import { errorConstants} from "../constants/error-constants";

export function updateHTMLWithWeatherInfo(apiHgbrModel: ApiHgbrModel, apiOpenWeatherModel: ApiOpenWeatherModel) {
    const cityNameElement = document.getElementById('cityNameScreen');
    const stateCityElement = document.getElementById('stateCityScreen');
    const temperatureElement = document.getElementById('temperatureScreen');
    const humidityElement = document.getElementById('humidityScreen');
    const windSpeedElement = document.getElementById('windSpeedScreen');
    const descriptionElement = document.getElementById('descriptionScreen');
    const iconWeatherElement = document.getElementById('weatherIconScreen');

    if (cityNameElement && temperatureElement && humidityElement
        && windSpeedElement && descriptionElement && stateCityElement) {

        clearHTML();

        cityNameElement.textContent = apiOpenWeatherModel.cityData.name;
        stateCityElement.textContent = apiOpenWeatherModel.cityData.state;
        temperatureElement.textContent = String(apiHgbrModel.results.temp+" °C");
        humidityElement.textContent = String(apiHgbrModel.results.humidity+" %");
        windSpeedElement.textContent = apiHgbrModel.results.wind_speedy;
        descriptionElement.textContent = apiHgbrModel.results.description;

    } else {
        console.log(errorConstants.UPDATE_HTML_ERROR_MESSAGE);
        alert(errorConstants.UPDATE_HTML_ERROR_MESSAGE);
    }
}

function clearHTML() {
    const cityNameElement = document.getElementById('cityNameScreen');
    const stateCityElement = document.getElementById('stateCityScreen');
    const temperatureElement = document.getElementById('temperatureScreen');
    const humidityElement = document.getElementById('humidityScreen');
    const windSpeedElement = document.getElementById('windSpeedScreen');
    const descriptionElement = document.getElementById('descriptionScreen');
    const iconWeatherElement = document.getElementById('weatherIconScreen');

    if (cityNameElement && temperatureElement && humidityElement
        && windSpeedElement && descriptionElement && stateCityElement) {
        cityNameElement.textContent = '';
        stateCityElement.textContent = '';
        temperatureElement.textContent = '';
        humidityElement.textContent = '';
        windSpeedElement.textContent = '';
        descriptionElement.textContent = '';
    } else {
        console.log("erro ao limpar a tela!");
        alert("erro ao limpar a tela!");
    }
}