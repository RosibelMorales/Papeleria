const pool = require('../database')
const controladorClientes = {}

controladorClientes.obtenerClientes=async(req,res)=>{
    const [rows]=await pool.query('SELECT * FROM Cliente');
    res.json(rows);
};

controladorClientes.obtenerCliente=async(req,res)=>{
    const CorreoCliente = req.params.CorreoCliente
    const [row] = await pool.query('SELECT * FROM Cliente WHERE CorreoCliente=?', [CorreoCliente])
    res.send(row[0])
}

controladorClientes.agregarCliente=async(req,res)=>{
    const {CorreoCliente, Nombre, Apellidos, Contrasena} = req.body
    const [rows] = await pool.query('INSERT INTO Cliente VALUES(?,?,?,?)', [CorreoCliente, Nombre, Apellidos, Contrasena])
    res.json({"status":"Cliente insertado exitosamente"})
    console.log(req.body)
}

controladorClientes.actualizarCliente = async(req,res)=>{
    const {Nombre, Apellidos, Direccion, Celular, Contrasena} = req.body
    const CorreoCliente = req.params.CorreoCliente
    const [row] = await pool.query('UPDATE Cliente SET Nombre=?, Apellidos=?, Direccion=?, Celular=?, Contrasena=? WHERE CorreoCliente=?', [Nombre, Apellidos, Direccion, Celular, Contrasena, CorreoCliente])
    res.json('{"status":"Cliente actualizado correctamente"}')
}

controladorClientes.eliminarCliente = async(req,res)=>{
    const CorreoCliente = req.params.CorreoCliente
    const [row] =await pool.query('DELETE FROM Cliente WHERE CorreoCliente=?',[CorreoCliente]);
    res.json('{"status":"Cliente eliminado"')
}

module.exports = controladorClientes