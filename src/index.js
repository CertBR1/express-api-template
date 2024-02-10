import 'dotenv/config'
import express from 'express'
const app = express();
import router from './router/router';
const port = process.env.PORT ?? 3000

app.use(router)

app.listen(port, () => {
    console.log(`Servidor na rodando na porta ${port}`);
})