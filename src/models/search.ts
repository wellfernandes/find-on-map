enum Temperature {
    CURRENT = 'Atual',
    MAX = 'Máxima',
    MIN = 'Mínima',
}

class Search {
    cityName: string;
    date: Date;
    temperature: Temperature;
    currentWeather: string;
    probabilityRain: number;
    moonPhase: string;

    constructor(
        cityName: string,
        date: Date,
        temperature: Temperature,
        currentWeather: string,
        probabilityRain: number,
        moonPhase: string
    ) {
        this.cityName = cityName;
        this.date = date;
        this.temperature = temperature;
        this.currentWeather = currentWeather;
        this.probabilityRain = probabilityRain;
        this.moonPhase = moonPhase;
    }
}