require('../models/category-model');
const base = require('../bin/base/repository-base');

class categoryRepository{
    constructor(){
        this._base = new base('Category');
    }

    async getAll(){
        return await this._base.getAll();
    }

    async getById(id){
        return await this._base.getById(id);
    }

    async create(data){
        return await this._base.create(data);
    }

    async update(id, data){
        return await this._base.update(id, data);
    }

    async delete(id){
        return await this._base.delete(id);
    }
}

module.exports = categoryRepository;