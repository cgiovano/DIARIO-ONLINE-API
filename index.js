import express from 'express';
import router from './routes/aluno.js';

const app = express();

app.use(express.json);

app.listen(3000, () => console.log("API inicializada"));