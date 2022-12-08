const Cliente = require('../models/Cliente')
const Producto = require('../models/Producto')

module.exports = class API {
    
    //Fetch all clientes
    static async fetchAllClientes(req, res){
        try{
            const clientes = await Cliente.find()
            res.status(200).json(clientes)
        } catch (err) {
            res.status(404).json({message: err.message})
        }
    }

    //Fetch cliente by id
    static async fetchClienteByID(req, res){
        const id = req.params.id
        try {
            const cliente = await Cliente.findById(id)
            res.status(200).json(cliente)
        } catch (err) {
            res.status(404).json({message: err.message})
        }
    }

    //Create a cliente
    static async createCliente(req, res){
        const cliente = req.body
        try {
            await Cliente.create(cliente)
            //res.status(201).json({message: 'Cliente creado exitósamente'})
            res.redirect('/')
        } catch (err) {
            res.status(400).json({message: err.message})
        }
    }

    //Update a cliente
    static async updateCliente(req, res){
        const id = req.params.id
        const clienteNuevo = req.body
        console.log(req.body)
        try {
            await Cliente.findByIdAndUpdate(id, clienteNuevo)
            res.status(200).json({message: 'Cliente actualizado'})
        } catch (err) {
            res.status(404).json({message: err.message})
        }
    }

    //Delete a cliente
    static async deleteCliente(req, res){
        const id = req.params.id
        try {
            await Cliente.findByIdAndDelete(id)
            res.status(200).json({message: 'Cliente eliminado'})
        } catch (err) {
            res.status(404).json({message: err.message})
        }
    }

    //Authenticate a cliente
    static async authenticateCliente(req, res){
        const usuario = req.body.usuario
        const contrasenia = req.body.contrasenia
        try {
            const cliente = await Cliente.find({$and: [{usuario},{contrasenia}]})
            //res.status(200).json({message: 'Cliente autenticado', id: cliente[0]._id.toString()})
            //res.redirect('/home/' + cliente[0]._id.toString())
            res.json(cliente)
        } catch (err) {
            res.status(404).json({message: err.message})
        }
    }

    //Fetch all productos
    static async fetchAllProductos(req, res){
        try{
            const productos = await Producto.find()
            res.status(200).json(productos)
        } catch (err) {
            res.status(404).json({message: err.message})
        }
    }

    //Create a producto
    static async createProducto(req, res){
        const producto = req.body
        const imagename = req.file.filename
        producto.imagen = imagename
        try {
            await Producto.create(producto)
            res.status(201).json({message: 'Producto creado exitósamente'})
        } catch (err) {
            res.status(400).json({message: err.message})
        }
    }

    //Update a carrito
    static async updateCarrito(req, res){
        const idCliente = req.params.id
        const carrito = req.body
        console.log(req.body)
        try {
            await Cliente.findByIdAndUpdate(idCliente, {$set: { carrito: carrito}})
            res.status(200).json({message: 'Cliente actualizó su carrito'})

        } catch (err) {
            res.status(400).json({message: err.message})
        }
    }

    //Fetch a carrito
    static async getCarrito(req, res) {
        const idCliente = req.params.id
        try {
            const clienteCarrito = await Cliente.findById(idCliente).populate(
                'carrito.producto'
            )
            console.log("controller api: " + clienteCarrito)
            res.status(200).json(clienteCarrito.carrito)
        } catch (err) {
            res.status(404).json({message: err.message})
        }
    }
}