import { apiConfigConstants } from "../constants/api-config-constants";

export default class ApiUtils {
    async getCityByName(cityName: string) {
        try {
            const response =
                await fetch(
                    apiConfigConstants.API_URL
                    +'key='+apiConfigConstants.API_KEY
                    +'&city_name='+cityName);

            console.log("Cidade Pesquisada: " + cityName);

            const data = await response.json();
            console.log("Cidade Encontrada: " + data);


        } catch (error) {
            console.log("Erro ao buscar a cidade:" + error);
        }
    }
}