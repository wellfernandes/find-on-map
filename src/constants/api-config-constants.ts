const apiConfigConstants = {
    // api hgbrasil
    API_HGBR_KEY: process.env.VITE_API_HGBR_KEY as string,
    API_HGBR_URL: process.env.VITE_API_HGBR_URL as string,

    // api openweather
    API_OPENWEATHER_KEY: process.env.VITE_API_OPENWEATHER_KEY as string,
    API_OPENWEATHER_URL: process.env.VITE_API_OPENWEATHER_URL as string,

    // server express
    PORT: process.env.VITE_PORT,

    // map
    ZOOM_MAP_DEFAULT: process.env.VITE_ZOOM_MAP_DEFAULT,
};

export { apiConfigConstants };