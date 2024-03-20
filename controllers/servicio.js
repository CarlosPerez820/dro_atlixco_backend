const {response} = require('express');
const Servicio = require('../models/servicio');

const servicioGet = async(req, res = response) => {
 
    const [total, servicio] = await Promise.all([
        Servicio.countDocuments(),
        Servicio.find()
    ]);
 
    res.json({
        total,
        servicio
    })
}

const servicioEspecificoGet = async(req, res= response)=>{
    const {id} = req.params;

    const servicio = await Servicio.findById(id)

    res.json({
        servicio
    })
}

const servicioPut = async(req, res = response) => {

    const {id} = req.params;
    const {_id, ...resto} = req.body;

    const servicio = await Servicio.findByIdAndUpdate(id, resto)

    res.json({
        msg: "PUT a mi API - Controlador",
        id,
        servicio
    })
}

const servicioPost = async (req, res = response) => {

    const body = req.body;
    const servicio = new Servicio(body);
    await servicio.save();

    res.json({
        msg: "POST a mi API----- Controlador",
        servicio
    })
}

const servicioDelete = async(req, res = response) => {

    const {id} = req.params;
    const servicio = await Servicio.findByIdAndDelete(id);

    res.json({
        msg: "DELETE a mi API - Controlador",
        servicio
    })
}

module.exports = {
    servicioGet,
    servicioEspecificoGet,
    servicioPut,
    servicioPost,
    servicioDelete
}