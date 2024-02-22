import { apiConfigConstants } from "../constants/api-config-constants";

export default class ApiUtils {
    async getCityByName(cityName: string) {
        try {
            const response = await fetch(
                apiConfigConstants.API_URL+`weather?`
                + apiConfigConstants.API_KEY
                + `&city?&city_name=${cityName}`);

            const data = await response.json();

            console.log("\n\nCidade Pesquisada:", cityName);
            console.log("\n\nCidade Encontrada:", data.toString()+"\n\n");

        } catch (error) {
            console.log("\n\nErro ao buscar a cidade:", error);
        }
    }
}