interface LocalNames {
    [key: string]: string;
}

interface CityData {
    name: string;
    local_names: LocalNames;
    lat: number;
    lon: number;
    country: string;
    state: string;
}

export interface ApiOpenWeatherModel {
    cityData: CityData;
}