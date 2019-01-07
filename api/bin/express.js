//Constantes
const express        = require('express');
const bodyPareser    = require('body-parser');

//Rotas
const categoryRouter = require('../routes/category-router');
const productRouter  = require('../routes/product-router');

//Invocando API do Express
const app            = express();

//Configuração do Parse do JSON
app.use(bodyPareser.json());
app.use(bodyPareser.urlencoded({ extended: false }));

//Config das rotas
app.use('/api/category', categoryRouter);
app.use('/api/product', productRouter);



//Export da API
module.exports = app;