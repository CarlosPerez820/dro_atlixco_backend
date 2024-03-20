const {Router} = require('express');
const {check} = require('express-validator');

const { tramiteGet, 
    tramiteEspecificoGet,
    tramitePut, 
    tramitePost, 
    tramiteDelete
 } = require('../controllers/tramite');

 const { validarCampos } = require('../middlewares/validar-campos');
const { existeTramiteID} = require('../helpers/db-validators');

const router = Router();

router.get('/', tramiteGet);

router.get('/especifico/:id',[
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeTramiteID),
    validarCampos
], tramiteEspecificoGet);

router.put('/:id',[
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeTramiteID),
    validarCampos
],tramitePut);

router.post('/',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('descripcion','La descripcion es obligatoria').not().isEmpty(),
    check('requisitos','Los requisitos son obligatorios').not().isEmpty(),
    validarCampos
],tramitePost);

router.delete('/:id',[
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeTramiteID),
    validarCampos
], tramiteDelete);


module.exports = router ;