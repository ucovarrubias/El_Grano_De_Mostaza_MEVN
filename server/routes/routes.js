const express = require('express')
const router = express.Router()
const API = require('../controllers/api')
const multer = require('multer')

//Multer middleware
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname)
    }
})

let upload = multer({
    storage: storage,
}).single('image')

router.get('/cliente/', API.fetchAllClientes)
router.get('/cliente/:id', API.fetchClienteByID)
router.post('/cliente/', API.createCliente)
router.patch('/cliente/:id', API.updateCliente)
router.delete('/cliente/:id', API.deleteCliente)
router.post('/cliente/auth', API.authenticateCliente)

router.patch('/cliente/carrito/:id', API.updateCarrito)
router.get('/cliente/carrito/:id', API.getCarrito)

router.get('/producto/', API.fetchAllProductos)
router.post('/producto/', upload, API.createProducto)



module.exports = router