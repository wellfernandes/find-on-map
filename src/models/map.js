import '../../assets/css/style.css';
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import ApiUtils from "../utils/api-utils";

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const apiUtils = new ApiUtils();

    searchButton.addEventListener('click', () => {
        getCityByName();
    });

    function getCityByName() {
        const cityNameInput = document.getElementById('cityName');
        const cityName = cityNameInput.value;
        apiUtils.getCityByName(cityName).then(r => {
            console.log("\n\nResponse: ", r+"\n\n");
        });
    }

    const map = new Map({
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