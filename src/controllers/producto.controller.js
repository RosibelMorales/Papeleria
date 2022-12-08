const pool = require('../database')
const controladorProducto = {}

controladorProducto.obtenerProductos = async (req, res) => {
    const [rows]=await pool.query('SELECT * FROM Producto');
    res.json(rows);
}

controladorProducto.obtenerProducto = async(req,res)=>{
    const idProducto=req.params.idProducto
    const [rows]=await pool.query('SELECT * FROM Producto WHERE idProducto=?',[idProducto]);
    res.send(rows);
}

controladorProducto.insertarProducto = async (req, res)=>{
    const {idProducto,CodigoBarras,Categoria,Marca,Descripcion,Piezas,Color,Imagen,Imagen2,UnidadesMayoreo,ExistenciasPaquete,ExistenciasUnidad,Entradas,PrecioUnidad,PrecioPaquete,PrecioMayoreo,CompraPaquete} = req.body
    const fecha = new Date().toLocaleString()
    const [rows] = await pool.query('INSERT INTO Producto VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [idProducto,CodigoBarras,Categoria,Marca,Descripcion,Piezas,Color,Imagen,Imagen2,UnidadesMayoreo,ExistenciasPaquete,ExistenciasUnidad,Entradas,PrecioUnidad,PrecioPaquete,PrecioMayoreo,CompraPaquete,fecha])
    res.json({"status":"Producto insertado exitosamente"})
}

controladorProducto.actualizarProducto = async (req, res)=>{
    console.log(req.body);
    console.log(req.params.idProducto)
    const {CodigoBarras,Categoria,Marca,Descripcion,Piezas,Color,Imagen,Imagen2,UnidadesMayoreo,ExistenciasPaquete,ExistenciasUnidad,Entradas,PrecioUnidad,PrecioPaquete,PrecioMayoreo,CompraPaquete} = req.body
    const idProducto = req.params.idProducto
    const [rows] = await pool.query('UPDATE Producto SET CodigoBarras=?, Categoria=?, Marca=?, Descripcion=?, Piezas=?, Color=?, Imagen=?, Imagen2=?, UnidadesMayoreo=?, ExistenciasPaquete=?, ExistenciasUnidad=?, Entradas=?, PrecioUnidad=?, PrecioPaquete=?, PrecioMayoreo=?, CompraPaquete=? WHERE idProducto=?', [CodigoBarras, Categoria, Marca, Descripcion, Piezas, Color, Imagen, Imagen2, UnidadesMayoreo, ExistenciasPaquete, ExistenciasUnidad, Entradas, PrecioUnidad, PrecioPaquete, PrecioMayoreo, CompraPaquete, idProducto])
    res.json('{"status":"Producto actualizado correctamente"}')
}

controladorProducto.eliminarProducto = async (req, res)=>{
    const idProducto = req.params.idProducto
    const [row] =await pool.query('DELETE FROM Producto WHERE idProducto=?',[idProducto]);
    res.json('{"status":"Repartidor eliminado"')
}

controladorProducto.buscarCategoria = async(req,res)=>{
    const categoria = req.params.cat
    const [rows]=await pool.query('SELECT * FROM Producto WHERE Categoria=?',[categoria]);
    res.send(rows);
}

module.exports = controladorProducto