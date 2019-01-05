const express = require('express');
const app     = express();

app.get('/', (req, res) =>{
    res.status(200).send("Hello World.");
});

//Inicia a API na porta digitada.
app.listen(3000, ()=>{
    console.log("Servidor API StyleFood iniciado na porta 3000.")
});