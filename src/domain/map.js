import '../../assets/css/style.css';
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import ApiUtils from "../utils/api-utils";
import { useGeographic } from 'ol/proj';
import { errorConstants } from "../constants/error-constants";
import { apiConfigConstants } from "../constants/api-config-constants";
import { updateHTMLWithWeatherInfo } from "./weather-information";
import { addToLocalHistory, getFromLocalHistory } from "../utils/local-utils";

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const apiUtils = new ApiUtils();

    searchButton.addEventListener('click', () => {
        getCityByName();
    });

    function getCityByName() {
        const cityNameInput = document.getElementById('cityName');
        const cityName = cityNameInput.value;

        const localCityData = getFromLocalHistory(cityName);

        if (localCityData) {
            console.log("Dados recuperados do histórico local");

            const centerCoordinates = [
                localCityData.apiOpenWeatherResponse.cityData.lon,
                localCityData.apiOpenWeatherResponse.cityData.lat
            ];

            useGeographic(centerCoordinates);

            map.getView().setCenter(centerCoordinates);
            map.getView().setZoom(apiConfigConstants.ZOOM_MAP_DEFAULT);

            updateHTMLWithWeatherInfo(localCityData.apiHgbrResponse, localCityData.apiOpenWeatherResponse);

            return localCityData;
        }

       apiUtils.getCityByName(cityName).then(async (apiHgbrResponse) => {
            try {
                const apiOpenWeatherResponse = await apiUtils.getCoordsByCityName(cityName);

                if (apiOpenWeatherResponse) {
                    const centerCoordinates = [
                        apiOpenWeatherResponse.cityData.lon,
                        apiOpenWeatherResponse.cityData.lat
                    ];

                    useGeographic(centerCoordinates);

                    map.getView().setCenter(centerCoordinates);
                    map.getView().setZoom(apiConfigConstants.ZOOM_MAP_DEFAULT);

                    updateHTMLWithWeatherInfo(apiHgbrResponse, apiOpenWeatherResponse);

                    addToLocalHistory(cityName, apiHgbrResponse, apiOpenWeatherResponse);
                } else {
                    console.log(errorConstants.GET_COORDS_ERROR_MESSAGE);
                    alert(errorConstants.GET_COORDS_ERROR_MESSAGE);
                }
            } catch (error) {
                console.error(errorConstants.GET_WEATHER_ERROR_MESSAGE, error);
                alert(errorConstants.GET_WEATHER_ERROR_MESSAGE);
            }
        });
    }

    const map = new Map({
        title: 'Find On Map',
        target: 'map',
        layers: [
            new TileLayer({
                source: new OSM(),
            }),
        ],
        view: new View({
            center: [0, 0],
            zoom: 2,
        }),
    });
});