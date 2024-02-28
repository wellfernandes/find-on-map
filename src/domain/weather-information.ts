import { ApiHgbrModel } from "../models/api-hgbr-model";
import { ApiOpenWeatherModel } from "../models/api-open-weather-model";
import { errorConstants } from "../constants/error-constants";
import { imagePaths } from "../constants/image-path-constants";

const cityNameElement = document.getElementById('currentCityName');
const stateCityElement = document.getElementById('stateCity');
const currentTemperatureElement = document.getElementById('currentTemperature');
const maxTemperatureElement = document.getElementById('maxTemperature');
const minTemperatureElement = document.getElementById('minTemperature');
const humidityElement = document.getElementById('humidity');
const windSpeedElement = document.getElementById('windSpeed');
const descriptionElement = document.getElementById('description');

const currentDayElement = document.getElementById('currentDay') as HTMLImageElement;
const weatherDayOneIconElement = document.getElementById('weatherDayOneIcon') as HTMLImageElement;
const weatherDayTwoIconElement = document.getElementById('weatherDayTwoIcon') as HTMLImageElement;
const weatherDayThreeIconElement = document.getElementById('weatherDayThreeIcon') as HTMLImageElement;
const weatherDayFourIconElement = document.getElementById('weatherDayFourIcon') as HTMLImageElement;
const weatherDayFiveIconElement = document.getElementById('weatherDayFiveIcon') as HTMLImageElement;

const dayWeekOneElement = document.getElementById('dayWeekOne');
const dayWeekTwoElement = document.getElementById('dayWeekTwo');
const dayWeekThreeElement = document.getElementById('dayWeekThree');
const dayWeekFourElement = document.getElementById('dayWeekFour');
const dayWeekFiveElement = document.getElementById('dayWeekFive');

export function updateHTMLWithWeatherInfo(apiHgbrModel: ApiHgbrModel, apiOpenWeatherModel: ApiOpenWeatherModel) {


    if (cityNameElement
        && currentTemperatureElement && maxTemperatureElement && minTemperatureElement
        && humidityElement && windSpeedElement && descriptionElement
        && stateCityElement && weatherDayOneIconElement && weatherDayTwoIconElement
        && weatherDayThreeIconElement && weatherDayFourIconElement && weatherDayFiveIconElement
        && dayWeekOneElement && dayWeekTwoElement && dayWeekThreeElement
        && dayWeekFourElement && dayWeekFiveElement && currentDayElement
    ) {

        clearHTML();

        cityNameElement.textContent = apiOpenWeatherModel.cityData.name;
        stateCityElement.textContent = apiOpenWeatherModel.cityData.state;
        currentTemperatureElement.textContent = String(apiHgbrModel.results.temp+" °C");
        maxTemperatureElement.textContent = String(apiHgbrModel.results.forecast[0].max+" °C");
        minTemperatureElement.textContent = String(apiHgbrModel.results.forecast[0].min+" °C");
        humidityElement.textContent = String(apiHgbrModel.results.humidity+" %");
        windSpeedElement.textContent = apiHgbrModel.results.wind_speedy;
        descriptionElement.textContent = apiHgbrModel.results.description;

        const currentDay = setIcons(apiHgbrModel.results.forecast[0].condition);
        const iconDayOne = setIcons(apiHgbrModel.results.forecast[1].condition);
        const iconDayTwo = setIcons(apiHgbrModel.results.forecast[2].condition);
        const iconDayThree = setIcons(apiHgbrModel.results.forecast[3].condition);
        const iconDayFour = setIcons(apiHgbrModel.results.forecast[4].condition);
        const iconDayFive = setIcons(apiHgbrModel.results.forecast[5].condition);

        dayWeekOneElement.textContent = apiHgbrModel.results.forecast[1].weekday;
        dayWeekTwoElement.textContent = apiHgbrModel.results.forecast[2].weekday;
        dayWeekThreeElement.textContent = apiHgbrModel.results.forecast[3].weekday;
        dayWeekFourElement.textContent = apiHgbrModel.results.forecast[4].weekday;
        dayWeekFiveElement.textContent = apiHgbrModel.results.forecast[5].weekday;

        currentDayElement.src = currentDay;
        weatherDayOneIconElement.src = iconDayOne;
        weatherDayTwoIconElement.src = iconDayTwo;
        weatherDayThreeIconElement.src = iconDayThree;
        weatherDayFourIconElement.src = iconDayFour;
        weatherDayFiveIconElement.src = iconDayFive;

    } else {
        console.log(errorConstants.UPDATE_HTML_ERROR_MESSAGE);
        alert(errorConstants.UPDATE_HTML_ERROR_MESSAGE);
    }
}

function clearHTML() {

    if (cityNameElement
        && currentTemperatureElement && maxTemperatureElement && minTemperatureElement
        && humidityElement && windSpeedElement && descriptionElement
        && stateCityElement && weatherDayOneIconElement && weatherDayTwoIconElement
        && weatherDayThreeIconElement && weatherDayFourIconElement && weatherDayFiveIconElement
    ) {
        cityNameElement.textContent = '';
        stateCityElement.textContent = '';
        currentTemperatureElement.textContent = '';
        maxTemperatureElement.textContent = '';
        minTemperatureElement.textContent = '';
        humidityElement.textContent = '';
        windSpeedElement.textContent = '';
        descriptionElement.textContent = '';

        currentDayElement.src = '';
        weatherDayOneIconElement.src = '';
        weatherDayTwoIconElement.src = '';
        weatherDayThreeIconElement.src = '';
        weatherDayFourIconElement.src = '';
        weatherDayFiveIconElement.src = '';
    } else {
        console.log(errorConstants.CLEAR_HTML_ERROR_MESSAGE);
        alert(errorConstants.CLEAR_HTML_ERROR_MESSAGE);
    }
}

function setIcons(condition: string): string {
    switch (condition) {
        case "clear_day":
            return imagePaths.CLEAR_DAY;
        case "clear_night":
            return imagePaths.CLEAR_NIGHT;
        case "cloud":
            return imagePaths.CLOUD;
        case "cloudly_day":
            return imagePaths.CLOUDLY_DAY;
        case "cloudly_night":
            return imagePaths.CLOUDLY_NIGHT;
        case "fog":
            return imagePaths.FOG;
        case "hail":
            return imagePaths.HAIL;
        case "none_day":
            return imagePaths.NONE_DAY;
        case "none_night":
            return imagePaths.NONE_NIGHT;
        case "rain":
            return imagePaths.RAIN;
        case "snow":
            return imagePaths.SNOW;
        case "storm":
            return imagePaths.STORM;
        default:
            console.error(errorConstants.SET_ICONS_ERROR_MESSAGE, condition);
            return imagePaths.DEFAULT;
    }
}