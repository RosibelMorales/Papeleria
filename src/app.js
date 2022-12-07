const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()


//Settings
app.set('port', process.env.PORT || 3000)

//Middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}));
app.use('/api/clientes', require('./routes/clientes.routes'));
app.use('/api/admin', require('./routes/administrador.routes'));
app.use('/api/repartidores', require('./routes/repartidor.routes'));
app.use('/api/productos', require('./routes/producto.routes'));

module.exports = app