--- 04-01-2024 08:59:52
--- MS SQL
/** ERROR ***
Token error: 'Incorrect syntax near 'pago_cliente'.' on server 2d8fde58ffb1 executing  on line 41 (code: 102, state: 1, class: 15)
 ----- 
--COMENTARIOS
/cOMENTARIO multilinea/

--crear una base de datos
--CREATE DATABASE nombre_de_la_base;

--Eliminar una base de datos
--DROP DATABASE IF EXISTS demo;

--Crear una tabla
/*CREATE TABLE nombre_tabla (
  id INT PRIMARY KEY,
  nombre varchar(50) NULL,
  apellido varchar(50),
  estado bit
  );*/
  
  /*CREATE TABLE libros (
  id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
  titulo varchar(50) NULL,
  id_autor INT NOT NULL,
  FOREIGN KEY (id_autor) REFERENCES autor (id)
  );*/
  
  --Eliminar una tabla
  --DROP TABLE nombre_tabla
  
  
  --Modificar una tabla
  --ALTER TABLE autor DROP COLUMN apellido;
  
  --ALTER TABLE autor ADD apellido varchar(50) NOT NULL;
  
  --alter TABLE table_name ALTER COLUMN nombre_viejo nombre_nuevo varchar(40);
  
  
  CREATE TABLE Pagos(
  id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    FECHA_PAGO DATETIME,
    medios_de_pago INT
	pago_cliente varchar(50),
    pago_total FLOAT,
    pedido_id INT
  );
***/


--create database BLOCKBUSTER;
 /*
  CREATE TABLE Pais(
  id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    nombre_pais varchar(50)
  );

  CREATE TABLE Provincias(
  id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    nombre_prov varchar(50),
   pais_id INT
  );

    CREATE TABLE Ciudad(
  id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    nombre_ciudad varchar(50),
    provincia_id INT
  );


  create table Medios_de_pago(
  id int not null primary key identity(1,1),
  titulo varchar(50)
  );



  create table Estados(
  id int not null primary key identity(1,1),
  nombre_estado varchar(50)
  );

  create table Empleados(
  id int not null primary key identity(1,1),
  nombre varchar(50),
  apellido varchar(50),
  codigo_empleado int,
  cuit varchar(20)
  );

  create table Clientes(
  id int not null primary key identity(1,1),
  nombre varchar(50),
  apellido varchar(50),
  calle varchar(50),
  numero int,
  email varchar(50),
  socio bit,
  fecha_asociado date NULL,
  fecha_nacimiento date,
  telefono varchar(20),
  ciudad_id int,

   foreign key (ciudad_id) references Ciudad(id),
  )

  create table Pedidos(
   id int not null primary key identity(1,1),
   empleado_id int,
   cliente_id int,
   total float,
   iva float,
   estado_id int,

   foreign key (empleado_id) references Empleados(id),
	foreign key (cliente_id) references Clientes(id),
	foreign key (estado_id) references Estados(id)
  );
  
  
  CREATE TABLE Pagos(
  id INT NOT NULL PRIMARY KEY identity(1,1),
    fecha_pago DATETIME,
    medios_de_pago_id INT,
	pago_cliente varchar(50),
    pago_total FLOAT,
    pedido_id INT

	foreign key (medios_de_pago_id) references Medios_de_pago(id),
	foreign key (pedido_id) references Pedidos(id)
  );


  
  CREATE TABLE Tipos(
  id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    tipo_contenido varchar(50)
  );


  
  
  CREATE TABLE Generos(
  id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    genero varchar(50)
  );


  
  
  CREATE TABLE Formatos(
  id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    formatos varchar(50)
  );

    create table Productos (
  id int not null primary key identity(1,1),
  tipo_id int,
  titulo varchar(50),
  genero_id int,
  formato_id int,
  stock int,
  autor varchar(50),
  fecha_lanzamiento date,
  precio float,

  foreign key (tipo_id) references Tipos(id),
	foreign key (genero_id) references Generos(id),
	foreign key (formato_id) references Formatos(id)
  )

  
  

    CREATE TABLE Detalle_Pedidos(
  id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    producto_id INT,
    pedido_id INT,
	cantidad INT,
    precio FLOAT

	foreign key (producto_id) references Productos(id),
	foreign key (pedido_id) references Pedidos(id)

  );
  
 
  
  
  
  
 
  insert into  Pais(nombre_pais) 
  values 
  		('argentina');
        
  insert into  Provincias(nombre_prov, pais_id) 
  values 
  		('buenos aires', 1),
        ('cordoba', 1),
        ('la pampa', 1);
        
  insert into  Ciudad(nombre_ciudad, provincia_id) 
  values 
  		('CABA', 1),
        ('cordoba', 2),
        ('santa rosa', 3);
        
insert into  Medios_de_pago(titulo)
VALUES
		('efectivo'),
        ('tarjeta de credito'),
        ('tarjeta de debito');
        

insert into  Estados(nombre_estado)
VALUES
		('pagado'),
        ('pendiente'),
        ('cancelado');
        

insert into  Empleados(nombre, apellido, codigo_empleado, cuit)
VALUES
		('Jose', 'Ramirez', 123, '20-12123123-1'),
        ('Manuel', 'Gonzalez', 124, '20-12123456-9'),
        ('Agustina', 'Perez', 125, '27-78923123-4');


insert into  Clientes(nombre, apellido, calle, numero, email, socio, fecha_asociado, fecha_nacimiento, telefono, ciudad_id)
VALUES
		('Juan', 'Gomez','falsa', 123,'jgomez@google.com',0, NULL,'2000-01-01', '1161234456' , 1),
        ('Carlos', 'Martinez','salsa', 23,'cmart@google.com',1, '2018-01-05','2004-07-09', '1188834456' , 2),
        ('Karla', 'Aguilera','fake', 323,'kagui@google.com',1, '2019-05-06','1996-06-07', '1188839196' , 3);
        
        

INSERT INTO Pedidos (empleado_id, cliente_id, total, iva, estado_id)
VALUES 
    (1, 1, 64.97, 21, 1),  
    (3, 2, 59.97, 21, 3),  
    (2, 3, 124.95, 21, 2);  



INSERT INTO Pagos (fecha_pago, medios_de_pago_id, pago_cliente, pago_total, pedido_id)
VALUES 
    ('2024-01-04 10:30:00', 1, 'Juan Perez', 126.99, 1),  
    ('2024-01-05 12:15:00', 2, 'Maria Gomez', 72.56, 2),  
    ('2024-01-06 14:45:00', 3, 'Carlos Rodriguez', 151.19, 3); 



insert into  Tipos(tipo_contenido)
VALUES
		('pelicula'),
        ('serie'),
        ('musica');
        
INSERT INTO Generos(genero)
VALUES 
    ('Ciencia Ficción'),
    ('Drama'),
    ('Crimen'),
    ('Rock'),
    ('Pop'),
    ('Hip Hop'),
    ('Clásica');


insert into  Formatos(formatos)
VALUES
		('dvd'),
        ('cd'),
        ('blu-ray'),
        ('vinilo');


INSERT INTO Productos (tipo_id, titulo, genero_id, formato_id, stock, autor, fecha_lanzamiento, precio)
VALUES 
    (1, 'Inception', 1, 2, 50, 'Christopher Nolan', '2010-07-16', 19.99),  
    (2, 'Breaking Bad', 2, 1, 30, 'Vince Gilligan', '2008-01-20', 29.99),  
    (3, 'The Dark Side of the Moon', 5, 4, 100, 'Pink Floyd', '1973-03-01', 14.99),  
	(2, 'Stranger Things', 2, 1, 25, 'Duffer Brothers', '2016-07-15', 24.99),  
    (3, 'Abbey Road', 5, 4, 75, 'The Beatles', '1969-09-26', 19.99);
    






INSERT INTO Detalle_Pedidos (producto_id, pedido_id, cantidad, precio)
VALUES 
    (1, 1, 2, 39.98), 
    (4, 1, 1, 24.99),  
    (5, 2, 3, 59.97), 
    (2, 3, 1, 29.99), 
    (4, 3, 5, 124.95); 



/*
select * from Ciudad;
select * from Clientes;
select * from Detalle_Pedidos;
select * from Empleados;
select * from Estados;
select * from Formatos;
select * from Generos;
select * from Medios_de_pago;
select * from Pagos;
select * from Pais;
select * from Pedidos;
select * from Productos;
select * from Provincias;
select * from Tipos;
*/

--select * from Detalle_Pedidos where (precio<40);

--select titulo, autor, precio from Productos where (precio<20) AND (tipo_id = 3)

--select Productos.titulo, Productos.autor, Generos.genero from Productos, Generos where (tipo_id = 3) and Productos.id = Generos.id;


--traer nombre apellido y email de clientes que realizaron pedidosCiudad

/*
select Clientes.nombre, Clientes.apellido, Clientes.email, Pedidos.id as 'pedido N°' 
from Clientes, Pedidos 
where Pedidos.cliente_id = Clientes.id;

SELECT Clientes.nombre, Clientes.apellido, Provincias.nombre_prov as 'Provincia' 
from Clientes, Ciudad, Provincias 
WHERE Clientes.ciudad_id = Ciudad.id and Ciudad.provincia_id = Provincias.id;
*/


update Clientes set Clientes.email = 'cmart@gmail.com' where id=2
/*
select * from Clientes;

select Pagos.fecha_pago, Pagos.pago_total, Clientes.nombre, Clientes.apellido 
from Pagos, Clientes, Pedidos 
where Clientes.socio = 1 and Pagos.pedido_id = Pedidos.id and Pedidos.cliente_id = Clientes.id and Clientes.email like '%gmail%';
*/


--agregar a todas las tablas la columna created_at con la fecha de hoy (GETDATE())






ALTER TABLE Clientes
ADD  created_at DATETIME;

ALTER TABLE Clientes
ADD  updated_at DATETIME;

----------------------------------------

ALTER TABLE Detalle_Pedidos
ADD  created_at DATETIME;

ALTER TABLE Detalle_Pedidos
ADD  updated_at DATETIME;

----------------------------------------

ALTER TABLE Empleados
ADD  created_at DATETIME;

ALTER TABLE Empleados
ADD  updated_at DATETIME;

----------------------------------------

ALTER TABLE Estados
ADD  created_at DATETIME;

ALTER TABLE Estados
ADD  updated_at DATETIME;

----------------------------------------

ALTER TABLE Formatos
ADD  created_at DATETIME;

ALTER TABLE Formatos
ADD  updated_at DATETIME;

----------------------------------------

ALTER TABLE Generos
ADD  created_at DATETIME;

ALTER TABLE Generos
ADD  updated_at DATETIME;

----------------------------------------

ALTER TABLE Medios_de_pago
ADD  created_at DATETIME;

ALTER TABLE Medios_de_pago
ADD  updated_at DATETIME;

----------------------------------------

ALTER TABLE Pagos
ADD  created_at DATETIME;

ALTER TABLE Pagos
ADD  updated_at DATETIME;

----------------------------------------

ALTER TABLE Pedidos
ADD  created_at DATETIME;

ALTER TABLE Pedidos
ADD  updated_at DATETIME;

----------------------------------------

ALTER TABLE Productos
ADD  created_at DATETIME;

ALTER TABLE Productos
ADD  updated_at DATETIME;

----------------------------------------

ALTER TABLE Tipos
ADD  created_at DATETIME;

ALTER TABLE Tipos
ADD  updated_at DATETIME;









UPDATE Clientes
SET created_at = GETDATE();

UPDATE Clientes
SET updated_at = GETDATE();


UPDATE Detalle_Pedidos
SET created_at = GETDATE();

UPDATE Detalle_Pedidos
SET updated_at = GETDATE();


UPDATE Empleados
SET created_at = GETDATE();

UPDATE Empleados
SET updated_at = GETDATE();


UPDATE Estados
SET created_at = GETDATE();

UPDATE Estados
SET updated_at = GETDATE();


UPDATE Formatos
SET created_at = GETDATE();

UPDATE Formatos
SET updated_at = GETDATE();


UPDATE Generos
SET created_at = GETDATE();

UPDATE Generos
SET updated_at = GETDATE();


UPDATE Medios_de_pago
SET created_at = GETDATE();

UPDATE Medios_de_pago
SET updated_at = GETDATE();


UPDATE Pagos
SET created_at = GETDATE();

UPDATE Pagos
SET updated_at = GETDATE();


UPDATE Pedidos
SET created_at = GETDATE();

UPDATE Pedidos
SET updated_at = GETDATE();


UPDATE Productos
SET created_at = GETDATE();

UPDATE Productos
SET updated_at = GETDATE();


UPDATE Tipos
SET created_at = GETDATE();

UPDATE Tipos
SET updated_at = GETDATE();



/*
select * from Pagos;

select Pagos.fecha_pago, Pagos.pago_cliente, Medios_de_pago.titulo
from Pagos, Medios_de_pago
where Pagos.medios_de_pago_id = Medios_de_pago.id and Pagos.fecha_pago BETWEEN '2024-01-04' and '2024-01-06'

*/
/*
SELECT DISTINCT Provincias.nombre_prov 
from Provincias, Ciudad
join Clientes 
on Clientes.ciudad_id = Ciudad.id
where Ciudad.provincia_id = Provincias.id

*/
/*

select top 2 percent Pedidos.total, Clientes.email
from Pedidos, Clientes
WHERE pedidos.cliente_id = Clientes.id

*/

/*
SELECT count(Productos.id) as 'Total productos'
FROM Productos
*/
/*
select SUM(Productos.stock) as 'Stock total', count(Productos.id) as 'Cantidad de productos'
from Productos
*/
/*
SELECT count (Clientes.id) as 'Clientes BSAS'
from Clientes
join Ciudad on clientes.ciudad_id = Ciudad.id
join Provincias on Ciudad.provincia_id = Provincias.id
where Provincias.nombre_prov = 'Buenos Aires'
*/
/*
SELECT COUNT(Productos.id) as 'cantidad de peliculas'
from Productos
join Tipos on Productos.tipo_id = Tipos.id
where Tipos.tipo_contenido = 'Pelicula'
*/
/*

select sum(Detalle_Pedidos.cantidad) as 'productos pedidos'
from Detalle_Pedidos
join Pedidos on Detalle_Pedidos.pedido_id = Pedidos.id
join Clientes on Pedidos.cliente_id = Clientes.id
WHERE Clientes.socio = 1
GROUP by Clientes.id

*/

select avg(Pedidos.total) as 'Promedio ventas empleado 2'
from Pedidos
where Pedidos.empleado_id = 2
*/


