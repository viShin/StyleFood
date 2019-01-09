require('../models/category-model');    
const mongoose      = require('mongoose');
const CategoryModel = mongoose.model('Category');

class categoryRepository{
    constructor(){

    }

    async getAll(){
        return await CategoryModel.find();
    }

    async getById(id){
        return await CategoryModel.findById(id);
    }

    async create(data){
        let category = new CategoryModel(data);
        let result   = await category.save();
        return result;
    }

    async update(id, data){
        await CategoryModel.findByIdAndUpdate(id, { $set: data });
        let result = await CategoryModel.findById(id);
        return result;
    }

    async delete(id){
        return await CategoryModel.findByIdAndRemove(id);
    }
}

module.exports = categoryRepository;