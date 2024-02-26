import '../../assets/css/style.css';
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import ApiUtils from "../utils/api-utils";
import { useGeographic } from 'ol/proj';
import { errorConstants } from "../constants/error-constants";
import { apiConfigConstants } from "../constants/api-config-constants";

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const apiUtils = new ApiUtils();

    searchButton.addEventListener('click', () => {
        getCityByName();
    });

    function getCityByName() {
        const cityNameInput = document.getElementById('cityName');
        const cityName = cityNameInput.value;

        apiUtils.getCityByName(cityName).then(async (result) => {
            try {
                const response = await apiUtils.getCoordsByCityName(cityName);

                if (response) {
                    const centerCoordinates = [response.cityData.lon, response.cityData.lat];

                    useGeographic(centerCoordinates);

                    map.getView().setCenter(centerCoordinates);
                    map.getView().setZoom(apiConfigConstants.ZOOM_MAP_DEFAULT);
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