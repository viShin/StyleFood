'use strict'

const mongoose = require('mongoose');
const schema   = mongoose.Schema;

const productModel = new schema({
    name: { type: String, required: true, index: true, trim: true },
    description: { type: String, required: true, },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    active: { type: Boolean, required: true },
    dateCreated: { type: Date, default: Date.now }
},{ versionKey: false })

//Antes de Salvar
productModel.pre('save', next => {
    let today = new Date();

    if (!this.dateCreated){
        this.dateCreated = today;
    }
    next();
});

module.exports = moongose.model('Product', productModel);