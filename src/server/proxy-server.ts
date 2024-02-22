import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import cors from 'cors';
import { apiConfigConstants } from '../constants/api-config-constants';

const app = express();

// CORS config
app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 204,
}));

// API proxy config
app.use('/api', createProxyMiddleware({
    target: 'http://localhost:' + apiConfigConstants.PORT,
    changeOrigin: true,
    pathRewrite: {
        '^/api': '',
    },
}));

app.listen(apiConfigConstants.PORT, () => {
    console.log(`Servidor de proxy rodando na porta ${apiConfigConstants.PORT}`);
});