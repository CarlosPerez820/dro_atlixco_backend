const {response} = require('express');
const Tramite = require('../models/tramite');

const tramiteGet = async(req, res = response) => {
 
    const [total, tramite] = await Promise.all([
        Tramite.countDocuments(),
        Tramite.find()
    ]);
 
    res.json({
        total,
        tramite
    })
}

const tramiteEspecificoGet = async(req, res= response)=>{
    const {id} = req.params;

    const tramite = await Tramite.findById(id)

    res.json({
        tramite
    })
}

const tramitePut = async(req, res = response) => {

    const {id} = req.params;
    const {_id, ...resto} = req.body;

    const tramite = await Tramite.findByIdAndUpdate(id, resto)

    res.json({
        msg: "PUT a mi API - Controlador",
        id,
        tramite
    })
}

const tramitePost = async (req, res = response) => {

    const body = req.body;
    const tramite = new Tramite(body);
    await tramite.save();

    res.json({
        msg: "POST a mi API----- Controlador",
        tramite
    })
}

const tramiteDelete = async(req, res = response) => {

    const {id} = req.params;
    const tramite = await Tramite.findByIdAndDelete(id);

    res.json({
        msg: "DELETE a mi API - Controlador",
        tramite
    })
}

module.exports = {
    tramiteGet,
    tramiteEspecificoGet,
    tramitePut,
    tramitePost,
    tramiteDelete
}