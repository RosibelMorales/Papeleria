const pool = require('../database')
const controladorAdministrador = {}

controladorAdministrador.obtenerAdministradores = async (req, res) => {
    const [rows]=await pool.query('SELECT * FROM Administrador');
    res.json(rows);
}

controladorAdministrador.insertarAdministrador = async (req, res)=>{
    const {CorreoAdmin, Nombre, Apellidos, Contraseña} = req.body
    const [rows] = await pool.query('INSERT INTO Administrador VALUES(?,?,?,?)', [CorreoAdmin, Nombre, Apellidos, Contraseña])
    res.send({
        CorreoAdmin:rows.insertCorreoAdmin,
        Nombre,
        Apellidos,
        Contraseña
    })
}

module.exports = controladorAdministrador