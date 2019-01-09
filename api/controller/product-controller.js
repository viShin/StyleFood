'use strict'
require('../models/product-model');
const repository = require('../repositories/product-repository');

function productController(){

}

productController.prototype.get     = async (req, res) => {
    let listProducts = await new repository().getAll();
    res.status(200).send(listProducts); 
};

productController.prototype.getById = async (req, res) => {
    let product = await new repository().get(req.params.id);
    res.status(200).send(product); 
};

productController.prototype.post    = async (req, res) => {
    let result = await new repository().create(req.body);
    res.status(201).send(result);
 };

productController.prototype.put     = async (req, res) => {
    let result = await new repository().update(req.params.id, req.body);
    res.status(202).send(result);
};

productController.prototype.delete  = async (req, res) => { 
    let result = await new repository().delete(req.params.id);
    res.status(204).send(result);
};

module.exports = productController;