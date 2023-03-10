CREATE TABLE clientes(
	id serial primary key,
	nombres VARCHAR(50) NOT NULL,
	apellidos VARCHAR(50) NOT NULL,
	rut VARCHAR(13) NOT NULL UNIQUE,
	email VARCHAR(50) NOT NULL,
	telefono VARCHAR (15) NOT NULL,
	direccion VARCHAR(50) NOT NULL,
	password VARCHAR(50) NOT NULL,
	estado BOOLEAN default true
);

CREATE TABLE categorias(
	id serial primary key,
	nombre VARCHAR(50) not null,
	descripcion VARCHAR(255)
);

CREATE TABLE carritos(
	id serial primary key,
	cliente_id int not null,
	FOREIGN KEY(cliente_id) REFERENCES clientes(id)	
);


CREATE TABLE productos(
	id serial primary key,
	nombre VARCHAR(50) NOT NULL,
	descripcion VARCHAR (255) NOT NULL,
	precio decimal not null default 9999999 check(precio >= 0),
	categoria_id int NOT NULL,
	FOREIGN KEY(categoria_id) REFERENCES categorias(id)	
);

ALTER TABLE productos ADD COLUMN stock int default 0;

ALTER TABLE productos ADD COLUMN descuento decimal default 0;

CREATE TABLE productos_carritos(
	id serial primary key,
	carrito_id int NOT NULL,
	producto_id int NOT NULL,
	cantidad int NOT NULL check(cantidad >= 0),
	FOREIGN KEY(carrito_id) REFERENCES carritos(id),
	FOREIGN KEY(producto_id) REFERENCES productos(id)
);

CREATE TABLE ventas(
	id serial primary key,
	fecha date,
	cliente_id int not null,
	FOREIGN KEY(cliente_id) REFERENCES clientes(id)
);

CREATE TABLE detalla_ventas(
	id serial primary key,
	cantidad int not null check(cantidad >=0),
	precio decimal not null check(precio >=0),
	venta_id int not null,
	producto_id int not null,
	FOREIGN KEY(venta_id) REFERENCES ventas(id),
	FOREIGN KEY(producto_id) REFERENCES productos(id)
);
