const mongoose = require('mongoose')
const schema = mongoose.Schema

const productoSchema = new schema({
    nombre: String,
    precio: Number,
    imagen: String,
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('producto', productoSchema)