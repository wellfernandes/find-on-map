import { defineConfig } from 'vite';
import { loadEnv } from 'vite';
import replace from '@rollup/plugin-replace';

export default ({ command }) => {
  const env = loadEnv(command, process.cwd());

  return defineConfig({
    plugins: [
      replace({
        'process.env.VITE_API_HGBR_KEY': JSON.stringify(env.VITE_API_HGBR_KEY),
        'process.env.VITE_API_HGBR_URL': JSON.stringify(env.VITE_API_HGBR_URL),
        'process.env.VITE_API_OPENWEATHER_KEY': JSON.stringify(env.VITE_API_OPENWEATHER_KEY),
        'process.env.VITE_API_OPENWEATHER_URL': JSON.stringify(env.VITE_API_OPENWEATHER_URL),
        'process.env.VITE_PORT': JSON.stringify(env.VITE_PORT),
        'process.env.VITE_ZOOM_MAP_DEFAULT': JSON.stringify(env.VITE_ZOOM_MAP_DEFAULT),
      }),
    ],
    proxy: {
      '/api': {
        target: 'http://localhost:' + env.VITE_PORT,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        withCredentials: true,
      },
    },
  });
};