const {Schema, model} = require('mongoose');

const ServicioSchema = Schema({
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

ServicioSchema.methods.toJSON = function (){
    const{__v, ...servicio} = this.toObject();
    return servicio;
}

module.exports = model('Servicio', ServicioSchema);
