//Constantes
const express    = require('express');
const bodyParser = require('body-parser');
const app        = express();

//Configuração do APP
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let pessoas = [];

//Get
app.get('/', (req, res) =>{
    res.status(200).send(pessoas);
});

//Post
app.post('/', (req, res) =>{
    pessoas.push(req.body);
    res.status(201).send(req.body);
});

//Put
app.put('/:id', (req, res) =>{
    let findPessoa = pessoas.find(p=>{return p.id == req.params.id});
    res.status(202).send(findPessoa);
});

//Delete
app.delete('/:id', (req, res) =>{
    for (let i = 0; i < pessoas.length; i++) {
        const pessoa = pessoas[i];
        if (pessoa.id == req.params.id){
            pessoas.splice(i, 1);
        }
        
    }
    res.status(204).send();
});

//Inicia a API na porta digitada.
app.listen(3000, ()=>{
    console.log("Servidor API StyleFood iniciado na porta 3000.")
});