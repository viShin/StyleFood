'use strict'
const mongoose      = require('mongoose');

class repositoryBase{
    constructor(model){
        this._model = mongoose.model(model);
    }

    async getAll(){
        return await this._model.find();
    }

    async getById(id){
        return await this._model.findById(id);
    }

    async create(data){
        let model = new this._model(data);
        let result   = await model.save();
        return result;
    }

    async update(id, data){
        await this._model.findByIdAndUpdate(id, { $set: data });
        let result = await this._model.findById(id);
        return result;
    }

    async delete(id){
        return await this._model.findByIdAndRemove(id);
    }
}

module.exports = repositoryBase;