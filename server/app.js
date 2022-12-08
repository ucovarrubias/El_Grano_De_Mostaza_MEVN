require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("uploads"))

//Conexión a BD
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
}).then(() => console.log('Conexión a BD'))
.catch((err) => console.log(err))

//Rutas
app.use('/api', require('./routes/routes'))

//Iniciar servidor
app.listen(port, () => console.log('Servidor iniciado en http://localhost:' + port))