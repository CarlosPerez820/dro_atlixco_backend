const Ingeniero = require('../models/ingeniero');
const Servicio = require('../models/servicio');
const Tramite = require('../models/tramite');

/*const correoDisponible = async(correo)=>{
    const existeEmail = await Usuario.findOne({correo});
    if(existeEmail)
    {
        throw new Error(`El correo: ${correo} ya existe en la base de datos`);
    }
}*/

const existeIngenieroID = async(id)=>{
    const existeIngeniero = await Ingeniero.findById(id);
    if(!existeIngeniero)
    {   
        throw new Error(`El ID: ${id} no existe en la base de datos`);
    }
}

const existeServicioID = async(id)=>{
    const existeServicio = await Servicio.findById(id);
    if(!existeServicio)
    {   
        throw new Error(`El ID: ${id} no existe en la base de datos`);
    }
}

const existeTramiteID = async(id)=>{
    const existeTramite = await Tramite.findById(id);
    if(!existeTramite)
    {   
        throw new Error(`El ID: ${id} no existe en la base de datos`);
    }
}


module.exports = {
    existeIngenieroID,
    existeServicioID,
    existeTramiteID
}