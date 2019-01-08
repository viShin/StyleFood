'use strict'

const moongose = require('mongoose');
const schema   = moongose.Schema;

const categoryModel = new schema({
    //Sem espaço na frente e atrás, possui index , é necessário, do tipo String
    title: { trim: true, index: true, required: true, type: String },
    description: { type: String },
    image: { type: String, required: true },
    active: { type: Boolean, required: true },
    dateCreated: { type: Date, default: Date.now }
}, { versionKey: false });


//Antes de Salvar
categoryModel.pre('save', next => {
    let today = new Date();

    if (!this.dateCreated){
        this.dateCreated = today;
    }
    next();
});

module.exports = moongose.model('Category', categoryModel);