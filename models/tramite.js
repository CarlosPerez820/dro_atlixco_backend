const {Schema, model} = require('mongoose');

const TramiteSchema = Schema({
    nombre:{
        type: String,
        required:[true, 'El nombre es obligatorio']
    },
    descripcion:{
        type: String,
        required:[true, 'La descrpcion es obligatorio']
    },
    requisitos:{
        type: [String],
        required: [true, 'Los requisitos son obligatorios']
    }
});

TramiteSchema.methods.toJSON = function (){
    const{__v, ...tramite} = this.toObject();
    return tramite;
}

module.exports = model('Tramite', TramiteSchema);
