const {Schema, model} = require('mongoose');

const IngenieroSchema = Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre del ingeniero es obligatorio']
    },
    status:{
        type: String,
        require: [true, 'El status es obligatorio']
    },
    direccion:{
        type: String,
        require: [true, 'La direccion es obligatorio']
    },
    cp:{
        type: String,
        require: [true, 'El codigo postal es obligatorio']
    },
    telefono:{
        type: String,
        required: [true, 'El telefono es obligatorio']
    },
    dro:{
        type: String,
        required: [true, 'El numero de registro es obligatorio']
    },
    curriculum:{
        type: String,
        required: [true, 'El curriculum es obligatorio'] 
    },
    correo:{
        type: String,
        required: [true, 'El correo es obligatorio']
    },
    latitud:{
        type: Number,
        required:[true, 'la latitud es obligatoria']
    },
    longitud:{
        type: Number,
        required:[true, 'la longitud es obligatoria']
    },
    whatsapp:{
        type: String,
        required: [true, 'El numero de whatsapp es obligatorio']
    },
    fotografia:{
        type: String,
        required: [true, 'La fotografia es obligatoria']
    },
    cedula:{
        type: String,
        required: [true, 'La cedula es obligatoria']
    }
});

IngenieroSchema.methods.toJSON = function (){
    const{__v, ...ingeniero} = this.toObject();
    return ingeniero;
}

module.exports = model('Ingeniero', IngenieroSchema);
