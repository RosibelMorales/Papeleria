const pool = require('../database')
const controladorRepartidor = {}

controladorRepartidor.obtenerRepartidores = async (req, res) => {
    const [rows]=await pool.query('SELECT * FROM Repartidor');
    res.json(rows);
}

controladorRepartidor.obtenerRepartidor = async(req,res)=>{
    const CorreoRepartidor=req.params.CorreoRepartidor
    const [row]=await pool.query('SELECT * FROM Repartidor WHERE CorreoRepartidor=?',[CorreoRepartidor]);
    res.send(row);
}

controladorRepartidor.insertarRepartidor = async (req, res)=>{
    const {CorreoRepartidor, Nombre, Apellidos, Direccion, Celular, Contraseña} = req.body
    const [rows] = await pool.query('INSERT INTO Repartidor VALUES(?,?,?,?,?,?)', [CorreoRepartidor, Nombre, Apellidos, Direccion, Celular, Contraseña])
    res.send({
        CorreoRepartidor:rows.insertCorreoRepartidor,
        Nombre,
        Apellidos,
        Direccion,
        Celular,
        Contraseña
    })
}

controladorRepartidor.actualizarRepartidor = async (req, res)=>{
    console.log(req.body);
    console.log(req.params.CorreoRepartidor)
    const {Nombre, Apellidos, Direccion, Celular, Contraseña} = req.body
    const CorreoRepartidor = req.params.CorreoRepartidor
    const [rows] = await pool.query('UPDATE Repartidor SET Nombre=?, Apellidos=?, Direccion=?, Celular=?, Contraseña=? WHERE CorreoRepartidor=?', [Nombre, Apellidos, Direccion, Celular, Contraseña,CorreoRepartidor])
    res.json('{"status":"Repartidor actualizado correctamente"}')
}

controladorRepartidor.eliminarRepartidor = async (req, res)=>{
    const CorreoRepartidor = req.params.CorreoRepartidor
    const [row] =await pool.query('DELETE FROM Repartidor WHERE CorreoRepartidor=?',[CorreoRepartidor]);
    res.json('{"status":"Repartidor eliminado"')
}

module.exports = controladorRepartidor