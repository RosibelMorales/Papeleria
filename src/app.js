const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()


//Settings
app.set('port', process.env.PORT || 3000)

const whitelist = ['http://localhost:4200']
const options = {
    origin: (origin, callback) => {
        if(whitelist.includes(origin)){
            callback(null, true)
        }else{
            callback(new Error('No permitido'))
        }
    }
}

//Middlewares
app.use(cors(options))
app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}));
app.use('/api/clientes', require('./routes/clientes.routes'));
app.use('/api/admin', require('./routes/administrador.routes'));
app.use('/api/repartidores', require('./routes/repartidor.routes'));
app.use('/api/productos', require('./routes/producto.routes'));

module.exports = app