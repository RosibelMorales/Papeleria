CREATE DATABASE IF NOT EXISTS papeleriahuauchinango;
USE papeleriahuauchinango;

CREATE TABLE Cliente (CorreoCliente VARCHAR(45) NOT NULL,
Nombre VARCHAR(45) NOT NULL,
Apellidos VARCHAR(65) NOT NULL,
Direccion VARCHAR(65),
Celular VARCHAR(10),
Contraseña VARCHAR(10) NOT NULL,
primary key (CorreoCliente));

CREATE TABLE Producto (idProducto INT NOT NULL AUTO_INCREMENT,
CodigoBarras varchar(30) not null,
Categoria VARCHAR(45) NOT NULL,
Marca VARCHAR(45) NOT NULL,
Descripcion VARCHAR(100) NOT NULL,
Piezas INT,
Color VARCHAR(45),
Imagen VARCHAR(100),
Imagen2 VARCHAR(100),
UnidadesMayoreo INT,
ExistenciasPaquete INT,
ExistenciasUnidad INT,
Entradas INT,
PrecioUnidad FLOAT,
PrecioPaquete FLOAT,
PrecioMayoreo FLOAT,
CompraPaquete FLOAT,
primary key (idProducto));

CREATE TABLE Administrador (CorreoAdmin VARCHAR (45) NOT NULL,
Nombre VARCHAR(45) NOT NULL,
Apellidos VARCHAR(65) NOT NULL,
Contraseña VARCHAR(10),
primary key (CorreoAdmin));

CREATE TABLE Venta (idVenta INT NOT NULL AUTO_INCREMENT,
CorreoCliente VARCHAR(45),
TipoPago VARCHAR(45),
FechaCompra DATETIME(6),
TotalPagar FLOAT,
MetodoEntrega VARCHAR(45),
primary key (idVenta),
foreign key (CorreoCliente) references Cliente (CorreoCliente));

CREATE TABLE Pedido (idPedido INT NOT NULL AUTO_INCREMENT,
CorreoCliente VARCHAR(45) NOT NULL,
idVenta INT NOT NULL,
FechaEntrega DATETIME(6) NOT NULL,
Estatus VARCHAR(20) NOT NULL,
foreign key (idVenta) references Venta (idVenta),
foreign key (CorreoCliente) references Cliente (CorreoCliente),
primary key (idPedido));

CREATE TABLE Repartidor (CorreoRepartidor VARCHAR(45) NOT NULL,
Nombre VARCHAR(45) NOT NULL,
Apellidos VARCHAR(65) NOT NULL,
Direccion VARCHAR(60) NOT NULL,
Celular VARCHAR(10) not null,
Contraseña VARCHAR(10) not null,
primary key (CorreoRepartidor));

CREATE TABLE Registra (
idRegistro INT NOT NULL AUTO_INCREMENT primary key,
fechaRegistro DATETIME(6) not null,
idProducto INT NOT NULL,
CorreoAdmin VARCHAR (45) NOT NULL,
foreign key (idProducto) references Producto (idProducto),
foreign key (CorreoAdmin) references Administrador (CorreoAdmin));

CREATE TABLE PedidoRepartidor (
idPedido INT NOT NULL,
CorreoRepartidor VARCHAR(45) NOT NULL,
foreign key (idPedido) references Pedido (idPedido),
foreign key (CorreoRepartidor) references Repartidor (CorreoRepartidor));

CREATE TABLE PedidoProducto (
idPedido INT NOT NULL,
idProducto INT NOT NULL,
foreign key (idPedido) references Pedido (idPedido),
foreign key (idProducto) references Producto (idProducto));

CREATE TABLE DetalleCompra (idCompra INT NOT NULL AUTO_INCREMENT primary key,
idVenta INT NOT NULL,
idProducto INT NOT NULL,
fechaCompra DATETIME(6) NOT NULL,
Cantidad FLOAT,
Precio FLOAT,
foreign key (idVenta) references Venta (idVenta),
foreign key (idProducto) references Producto (idProducto));