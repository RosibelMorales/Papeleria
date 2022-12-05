const pool = require('../database')
const controladorClientes = {}

controladorClientes.obtenerClientes=async(req,res)=>{
    const [rows]=await pool.query('SELECT * FROM cliente');
    res.json(rows);
};

controladorClientes.obtenerCliente=async(req,res)=>{
    const CorreoCliente = req.params.CorreoCliente
    const [row]=await pool.query('SELECT * FROM Cliente WHERE CorreoCliente=?', [CorreoCliente])
    res.send(row)
}

controladorClientes.agregarCliente=async(req,res)=>{
    const {CorreoCliente, Nombre, Apellidos, Direccion, Celular, Contraseña} = req.body
    const [rows] = await pool.query('INSERT INTO Cliente VALUES(?,?,?,?,?,?)', [CorreoCliente, Nombre, Apellidos, Direccion, Celular, Contraseña])
    res.json({"status":"Cliente insertado exitosamente"})
}

controladorClientes.actualizarCliente = async(req,res)=>{
    const {Nombre, Apellidos, Direccion, Celular, Contraseña} = req.body
    const CorreoCliente = req.params.CorreoCliente
    const [row] = await pool.query('UPDATE Cliente SET Nombre=?, Apellidos=?, Direccion=?, Celular=?, Contraseña=? WHERE CorreoCliente=?', [Nombre, Apellidos, Direccion, Celular, Contraseña, CorreoCliente])
    res.json('{"status":"Cliente actualizado correctamente"}')
}

controladorClientes.eliminarCliente = async(req,res)=>{
    const CorreoCliente = req.params.CorreoCliente
    const [row] =await pool.query('DELETE FROM Cliente WHERE CorreoCliente=?',[CorreoCliente]);
    res.json('{"status":"Cliente eliminado"')
}

module.exports = controladorClientes