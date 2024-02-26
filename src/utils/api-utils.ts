import { apiConfigConstants } from "../constants/api-config-constants";
import { errorConstants } from "../constants/error-constants";
import { ApiHgbrModel } from "../models/api-hgbr-model";
import { ApiOpenWeatherModel } from "../models/api-open-weather-model";

export default class ApiUtils {
    async getCityByName(cityName: string) {
        try {
            const response = await fetch(
                apiConfigConstants.API_HGBR_URL
                +`weather?`
                + apiConfigConstants.API_HGBR_KEY
                + `&city?&city_name=${cityName}`);

            const data = await response.json();

            const apiResponse: ApiHgbrModel = {
                by: data.by,
                valid_key: data.valid_key,
                results: {
                    temp: data.results.temp,
                    date: data.results.date,
                    time: data.results.time,
                    condition_code: data.results.condition_code,
                    description: data.results.description,
                    currently: data.results.currently,
                    cid: data.results.cid,
                    city: data.results.city,
                    img_id: data.results.img_id,
                    humidity: data.results.humidity,
                    cloudiness: data.results.cloudiness,
                    rain: data.results.rain,
                    wind_speedy: data.results.wind_speedy,
                    wind_direction: data.results.wind_direction,
                    wind_cardinal: data.results.wind_cardinal,
                    sunrise: data.results.sunrise,
                    sunset: data.results.sunset,
                    moon_phase: data.results.moon_phase,
                    condition_slug: data.results.condition_slug,
                    city_name: data.results.city_name,
                    timezone: data.results.timezone,
                    forecast: data.results.forecast,
                },
                execution_time: data.execution_time,
                from_cache: data.from_cache,
            };

            return apiResponse;

        } catch (error) {
            console.log(errorConstants.GET_ERROR_MESSAGE, error);
            alert(errorConstants.GET_ERROR_MESSAGE);
        }
    }

    async getCoordsByCityName(cityName: string) {

        const city = cityName.split(',')[0].trim();
        try {
            const response = await fetch(
                apiConfigConstants.API_OPENWEATHER_URL
                + `geo/1.0/direct?q=`
                + `${city}&limit=5&appid=`
                + apiConfigConstants.API_OPENWEATHER_KEY);

            const data = await response.json();

            if (data && data.length > 0) {

                const cityData = data[0];
                const apiResponse: ApiOpenWeatherModel = {
                    cityData: {
                        name: cityData.name,
                        local_names: cityData.local_names,
                        lat: cityData.lat,
                        lon: cityData.lon,
                        country: cityData.country,
                        state: cityData.state,
                    },
                };

                return apiResponse;
            }
        } catch (error) {
            console.log(errorConstants.GET_ERROR_MESSAGE, error);
            alert(errorConstants.GET_ERROR_MESSAGE);
        }
    }
}