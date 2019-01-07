'use strict'

function categoryController(){

}

categoryController.prototype.get     = async (req, res) => {
    res.status(200).send("Working"); 
};

categoryController.prototype.getById = async (req, res) => {
    res.status(200).send(`Passado o ID: ${req.params.id}`); 
};

categoryController.prototype.post    = async (req, res) => { };

categoryController.prototype.put     = async (req, res) => { };

categoryController.prototype.delete  = async (req, res) => { };

module.exports = categoryController;