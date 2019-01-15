'use strict'
const repository = require('../repositories/user-repository');
const validation = require('../bin/helpers/validation');
const ctrlBase   = require('../bin/base/controller-base');
const md5        = require('md5');
const jwt        = require('jsonwebtoken');
const variables  = require('../bin/configuration/variables');
const _repo = new repository();

function userController(){

}

userController.prototype.get     = async (req, res) => {
    ctrlBase.get(_repo, req, res);
};

userController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
};

userController.prototype.post = async (req, res) => { 
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.name,    'Informe seu nome.');
    _validationContract.isRequired(req.body.email,   'Informe seu email.');
    _validationContract.isEmail(req.body.email,      'O email é inválido.');
    _validationContract.isRequired(req.body.password,'A senha informada é inválida.');
    _validationContract.isRequired(req.body.passConfirmation, 'A senha de confirmação é obrigatória.');
    _validationContract.isTrue(req.body.password != req.body.passConfirmation, 'A senha e a confirmação não são iguais.');

    //Checa se o email já está cadastrado
    let user = await _repo.isEmail(req.body.email);
    if (user){
        _validationContract.isTrue((user.name != undefined),`Já existe o email ${req.body.email} cadastrado.`);
    }
    req.body.password = md5(req.body.password);

    ctrlBase.post(_repo, _validationContract, req, res);
};

userController.prototype.put     = async (req, res) => { 
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.name, 'Informe seu nome.');
    _validationContract.isRequired(req.params.id,   'Informe o ID do usuário a ser editado.');
    _validationContract.isRequired(req.body.email,'Informe seu email.');
    _validationContract.isEmail(req.body.email,   'O email é inválido.');

     //Checa se o email já está cadastrado
     let user = await _repo.isEmail(req.body.email);
     if (user){
         _validationContract.isTrue((user.name != undefined) && (user._id != req.params.id), `Já existe o email ${req.body.email} cadastrado.`);
     }

     ctrlBase.put(_repo, _validationContract, req, res);
};

userController.prototype.delete  = async (req, res) => { 
    ctrlBase.delete(_repo, req, res);
};

userController.prototype.authenticate = async (req, res) => {
    let _validationContract = new validation();

    //Valida email e senha
    _validationContract.isRequired(req.body.email,'Informe seu email.');
    _validationContract.isEmail(req.body.email,   'O email é inválido.');
    _validationContract.isRequired(req.body.password,'A senha informada é inválida.');

    if (!_validationContract.isValid()){
        res.status(400).send({ message: 'Não foi possível efetuar o login.', validation: _validationContract.errors() });
        return;
    }

    let user = await _repo.authenticate(req.body.email, req.body.password);
    if (user){
        res.status(200).send({ 
            user: user,
            token: jwt.sign({user: user}, variables.Security.secretKey)
        });
    }else{
        res.status(404).send({ message: 'Usuário e senha informados são inválidos.'});
    }
}

module.exports = userController;