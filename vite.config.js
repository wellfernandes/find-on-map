import { defineConfig } from 'vite';
import { apiConfigConstants } from "./src/constants/api-config-constants";

export default defineConfig({
  proxy: {
    '/api': {
      target: 'http://localhost:' + apiConfigConstants.PORT,
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
      withCredentials: true,
    },
  },
});