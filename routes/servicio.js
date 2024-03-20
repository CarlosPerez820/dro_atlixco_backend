const {Router} = require('express');
const {check} = require('express-validator');

const { servicioGet, 
    servicioEspecificoGet,
    servicioPut, 
    servicioPost, 
    servicioDelete
 } = require('../controllers/servicio');

 const { validarCampos } = require('../middlewares/validar-campos');
const { existeServicioID} = require('../helpers/db-validators');

const router = Router();

router.get('/', servicioGet);

router.get('/especifico/:id',[
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeServicioID),
    validarCampos
], servicioEspecificoGet);

router.put('/:id',[
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeServicioID),
    validarCampos
],servicioPut);

router.post('/',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('descripcion','La descripcion es obligatoria').not().isEmpty(),
    check('requisitos','Los requisitos son obligatorios').not().isEmpty(),
    validarCampos
],servicioPost);

router.delete('/:id',[
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeServicioID),
    validarCampos
], servicioDelete);


module.exports = router ;