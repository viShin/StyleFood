'use strict'

class ValidationContract{
    constructor(){
        this._errors = [];
    }

    isNotArrayOrEmpty(val, message){
        //Caso não exista ou seja um array vazio
        if (!val && val.length == 0){
            this._errors.push({ message: message });
        }
    }

    isTrue(val, message){
        if (val){
            this._errors.push({ message: message });
        }
    }
    
    isRequired(val, message){
        if (!val || val.length <= 0){
            this._errors.push({ message: message });
        }
    }
    
    hasMinLen(val, min, message){
        if (!val || val.length < min){
            this._errors.push({ message: message });
        }
    }
    
    hasMaxLen(val, min, message){
        if (!val || val.length > max){
            this._errors.push({ message: message });
        }
    }
    
    isFixedLen(val, len, message){
        if (val.length != len){
            this._errors.push({ message: message });
        }
    }

    isEmail(val, message){
        var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
        if (!reg.test(val)){
            this._errors.push({ message: message });
        }
    }

    errors(){
        return this._errors;
    }

    clear(){
        this._errors = [];
    }

    isValid(){
        return this._errors.length == 0;
    }
}
module.exports = ValidationContract;    