require('../models/user-model');
const base = require('../bin/base/repository-base');
const md5  = require('md5');

class userRepository{
    constructor(){
        this._base = new base('User');
        this._projection = 'name email _id';
    }

    async authenticate(email, password){
        //Busca pelo email e senha com md5 e retorna somente o 'nome, email e _id (projeção)
        return await this._base._model.findOne({ email: email, password: md5(password) }, this._projection);
    }

    async getAll(){
        return await this._base._model.find({}, this._projection);
    }

    async getById(id){
        return await this._base._model.findById(id, 'name email _id image');
    }

    async create(data){
        let user = await this._base.create(data);
        return this._base._model.findById(user._id, this._projection);
    }

    async update(id, data){
        //Garantir que não vai alterar a senha, irá ser criado um método somente para isso.
        let user = await this._base.update(id, {
            name: data.nome,
            email: data.email,
            image: data.image
        });
        return this._base._model.findById(user._id, this._projection);
    }

    async delete(id){
        return await this._base.delete(id);
    }

    async isEmail(email){
        return await this._base._model.findOne({email: email}, this._projection);
    }
}

module.exports = userRepository;