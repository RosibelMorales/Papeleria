const {pool} = require("../database.js")
const ping = async(req,res)=>{
    const result=await pool.query('select * from cliente');
    res.json(result[0]);
};

module.exports = ping