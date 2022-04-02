import express from "express";
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import bodyParse from 'body-parser'
import path from "path";
import mainRoutes from './routes/index';7


//config variavel de ambiente .env
dotenv.config();

//config express
const server = express();


//server.use(express.json);
//config body parse
server.use(bodyParse.urlencoded({
    extended:true
}));
server.use(bodyParse.json());

//segurança
server.disable('x-powered-by');

//config mustache config das pastas
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());
server.use(express.static(path.join(__dirname, '../public')));


//Rotas
server.use(mainRoutes);
server.use((req, res)=>{
    res.render('pages/404');
});

//Servidor
server.listen(process.env.PORT || 4000, () => {
    console.log("servidor rodando");
});