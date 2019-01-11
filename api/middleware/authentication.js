//Pela ideia de ser simples, o middleway utilizará EXPORTS
const jwt = require('jsonwebtoken');
const variables = require('../bin/configuration/variables');

//Next usado para prosseguir caso dê aceite no middleware
module.exports = async (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token){
        try{
            let decoded = await jwt.verify(token, variables.Security.secretKey);
            console.log(decoded);
            req.loggedUser = decoded;
            next();
        }catch(err){
            res.status(401).send({ message: 'Token inválido.'});    
            return;
        }
    }else{
        res.status(401).send({ message: 'Falha na autenticação.'});
        return;
    }
}