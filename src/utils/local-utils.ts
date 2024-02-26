import {ApiHgbrModel} from "../models/api-hgbr-model";
import {ApiOpenWeatherModel} from "../models/api-open-weather-model";

interface LocalHistoryEntry {
    city: string;
    data: { apiHgbrResponse: ApiHgbrModel; apiOpenWeatherResponse: ApiOpenWeatherModel };
}

export function addToLocalHistory(
    cityName: string,
    apiHgbrResponse: ApiHgbrModel,
    apiOpenWeatherResponse: ApiOpenWeatherModel
): void {
    const history = getLocalHistory();

    const existingIndex = history.findIndex((entry) => entry.city === cityName);

    if (existingIndex !== -1) {
        // update existing entry
        history[existingIndex].data = {
            apiHgbrResponse,
            apiOpenWeatherResponse,
        };
    } else {
        // add new entry
        history.push({
            city: cityName,
            data: { apiHgbrResponse, apiOpenWeatherResponse },
        });
    }

    saveLocalHistory(history);
}

export function getFromLocalHistory(cityName: string): any | undefined {
    const history = getLocalHistory();

    const historyEntry = history.find(entry => entry.city === cityName);

    return historyEntry ? historyEntry.data : undefined;
}

function getLocalHistory(): LocalHistoryEntry[] {
    const storedHistory = localStorage.getItem("searchHistory") || "[]";
    return JSON.parse(storedHistory) as LocalHistoryEntry[];
}

function saveLocalHistory(history: LocalHistoryEntry[]): void {
    localStorage.setItem("searchHistory", JSON.stringify(history));
}