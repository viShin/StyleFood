//Constantes
const express = require('express');
const app     = express();

//Get
app.get('/', (req, res) =>{
    res.status(200).send("Hello World.");
});

//Post
app.post('/', (req, res) =>{
    res.status(201).send("Created.");
});

//Put
app.put('/', (req, res) =>{
    res.status(202).send("Updated.");
})

//Delete
app.delete('/', (req, res) =>{
    res.status(204).send("Deleted.");
})

//Inicia a API na porta digitada.
app.listen(3000, ()=>{
    console.log("Servidor API StyleFood iniciado na porta 3000.")
});