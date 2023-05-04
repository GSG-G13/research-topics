import {} from 'dotenv/config';
import express from 'express';
import path from 'path';
import router from './routes/router.js';


const app = express();
const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.set('PORT', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(router)

export default app;