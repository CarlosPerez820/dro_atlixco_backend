const {response} = require('express');
const Ingeniero = require('../models/ingeniero');

const ingenieroGet = async(req, res = response) => {
 
    const [total, ingenieros] = await Promise.all([
        Ingeniero.countDocuments(),
        Ingeniero.find()
    ]);
 
    res.json({
        total,
        ingenieros
    })
}

const ingenieroEspecificoGet = async(req, res= response)=>{
    const {id} = req.params;

    const ingeniero = await Ingeniero.findById(id)

    res.json({
        ingeniero
    })
}

const ingenieroPut = async(req, res = response) => {

    const {id} = req.params;
    const {_id, ...resto} = req.body;

    const ingeniero = await Ingeniero.findByIdAndUpdate(id, resto)

    res.json({
        msg: "PUT a mi API - Controlador",
        id,
        ingeniero
    })
}

const ingenieroPost = async (req, res = response) => {

    const body = req.body;
    const ingeniero = new Ingeniero(body);
    await ingeniero.save();

    res.json({
        msg: "POST a mi API----- Controlador",
        ingeniero
    })
}

const ingenieroDelete = async(req, res = response) => {

    const {id} = req.params;
    const ingeniero = await Ingeniero.findByIdAndDelete(id);

    res.json({
        msg: "DELETE a mi API - Controlador",
        ingeniero
    })
}

module.exports = {
    ingenieroGet,
    ingenieroEspecificoGet,
    ingenieroPut,
    ingenieroPost,
    ingenieroDelete
}