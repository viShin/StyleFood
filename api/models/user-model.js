'use strict'

const mongoose = require('mongoose');
const schema   = mongoose.Schema;

const userModel = new schema({
    name:        { type: String, required: true, index: true, trim: true },
    email:       { type: String, required: true },
    password:    { type: String, required: true },
    image:       { type: String },
    active:      { type: Boolean, required: true },
    dateCreated: { type: Date, default: Date.now }
},{ versionKey: false })

//Antes de Salvar
userModel.pre('save', next => {
    let today = new Date();

    if (!this.dateCreated){
        this.dateCreated = today;
    }
    next();
});

module.exports = mongoose.model('User', userModel);