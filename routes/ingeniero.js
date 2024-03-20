const {Router} = require('express');
const {check} = require('express-validator');

const { ingenieroGet, 
    ingenieroEspecificoGet,
    ingenieroPut, 
    ingenieroPost, 
    ingenieroDelete
 } = require('../controllers/ingeniero');

 const { validarCampos } = require('../middlewares/validar-campos');
const { existeIngenieroID} = require('../helpers/db-validators');

const router = Router();

router.get('/', ingenieroGet);

router.get('/especifico/:id',[
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeIngenieroID),
    validarCampos
], ingenieroEspecificoGet);

router.put('/:id',[
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeIngenieroID),
    validarCampos
],ingenieroPut);

router.post('/',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('status','El status es obligatorio').not().isEmpty(),
    check('direccion','La direccion es obligatoria').not().isEmpty(),
    check('cp','El codigo postal es obligatorio').not().isEmpty(),
    check('telefono','El telefono es obligatorio').not().isEmpty(),
    check('dro','El numero de DRO es obligatorio').not().isEmpty(),
    check('curriculum','El curriculum es obligatorio').not().isEmpty(),
    check('correo','El correo es obligatorio').not().isEmpty(),
    check('latitud','La Latitud es obligatoria').not().isEmpty(),
    check('longitud','La longitud es obligatoria').not().isEmpty(),
    check('whatsapp','El numero de Whatsapp es obligatoria').not().isEmpty(),
    check('fotografia','La fotografia es obligatoria').not().isEmpty(),
    check('cedula','La cedula profesional es obligatoria').not().isEmpty(),
    validarCampos
],ingenieroPost);

router.delete('/:id',[
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeIngenieroID),
    validarCampos
], ingenieroDelete);


module.exports = router ;