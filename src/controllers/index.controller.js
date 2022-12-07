const {pool} = require("../database.js")

const root = async (req, res) => {
    const [rows]=await pool.query('SELECT * FROM Producto');
    res.json(rows);
}

module.exports = root