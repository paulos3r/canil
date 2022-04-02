import bodyParse from 'body-parser';
import express from 'express';

const app = express();
//config body parse
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({
    extended:false
}));

