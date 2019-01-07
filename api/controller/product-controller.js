'use strict'

function productController(){

}

productController.prototype.get     = async (req, res) => {
    res.status(200).send("Working"); 
};

productController.prototype.getById = async (req, res) => {
    res.status(200).send(`Passado o ID do produto: ${req.params.id}`); 
};

productController.prototype.post    = async (req, res) => { };

productController.prototype.put     = async (req, res) => { };

productController.prototype.delete  = async (req, res) => { };

module.exports = productController;