//Constantes
const express     = require('express');
const bodyPareser = require('body-parser');
const app         = express();

//Configuração do APP
app.use(bodyPareser.json());
app.use(bodyPareser.urlencoded({ extended: false }));

module.exports = app;