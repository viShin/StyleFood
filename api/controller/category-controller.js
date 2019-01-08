'use strict'
require('../models/category-model');
const mongoose = require('mongoose');
const Category = mongoose.model('Category');

function categoryController(){

}

categoryController.prototype.get     = async (req, res) => {
    let listCategory = await Category.find();
    res.status(200).send(listCategory);
};

categoryController.prototype.getById = async (req, res) => {
    let cat = await Category.findById(req.params.id);
    res.status(200).send(cat);
};

categoryController.prototype.post    = async (req, res) => { 
    let categoryModel = new Category(req.body);
    let result = await categoryModel.save();
    res.status(201).send(result);
};

categoryController.prototype.put     = async (req, res) => { 
    await Category.findByIdAndUpdate(req.params.id, { $set: req.body }); //O Await faz que a próxima ação espere esta terminar
    let cat = await Category.findById(req.params.id);
    res.status(202).send(cat);
};

categoryController.prototype.delete  = async (req, res) => { 
    let cat = await Category.findByIdAndRemove(req.params.id);
    res.status(204).send(cat);
};

module.exports = categoryController;