require('../models/product-model');
const mongoose = require('mongoose');
const ProductModel = mongoose.model('Product');

class productRepository{
    constructor(){

    }

    async getById(id){
        return await new ProductModel.findById(id);
    }
    async getAll(){
        return await ProductModel.find();
    }

    async create(data){
        let product = new ProductModel(data);
        let result  = await product.save();
        return result;
    }

    async update(id, data){
        await ProductModel.findByIdAndUpdate(id, { $set: data });
        let result = await ProductModel.findById(id);
        return result;
    }

    async delete(id){
        return await ProductModel.findByIdAndRemove(id);
    }
}

module.exports = productRepository;