enum Temperature {
    CURRENT = 'Atual',
    MAX = 'Máxima',
    MIN = 'Mínima',
}

interface Search {
    cityName: string;
    date: Date;
    temperature: Temperature;
    currentWeather: string;
    probabilityRain: number;
    moonPhase: string;
}