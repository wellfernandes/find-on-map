interface LocalHistoryEntry {
    city: string;
    data: any;
}

export function addToLocalHistory(cityName: string, cityData: any): void {
    const history = getLocalHistory();

    const existingIndex = history.findIndex(entry => entry.city === cityName);

    if (existingIndex !== -1) {
        // update existing entry
        history[existingIndex].data = cityData;
    } else {
        // add new entry
        history.push({ city: cityName, data: cityData });
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