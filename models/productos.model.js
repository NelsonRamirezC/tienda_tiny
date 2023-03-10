import db from '../db/db.js'

class Producto{
    constructor(id, nombre, descripcion, precio, categoria_id, stock){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.categoria_id = categoria_id;
        this.stock = stock;
    }

    getProductos(){
        return new Promise(async (resolve, reject) => {
            try{
                let productos = await db.query(
                    `
                    select pr.id, pr.nombre, pr.descripcion, pr.precio, pr.descuento, pr.stock, ct.nombre as categoria from productos pr
                    inner join categorias ct
                    ON pr.categoria_id = ct.id
                    `);
                    return resolve(productos.rows)
            }catch(error){
                return reject("Error al cargar productos.");
            }
        })
    }

    getProductoPorId(id) {

        return new Promise(async (resolve, reject) => {
            try{
                let producto = await db.query(
                    `
                    select pr.id, pr.nombre, pr.descripcion, pr.precio, pr.descuento, pr.stock, ct.nombre as categoria from productos pr
                    inner join categorias ct
                    ON pr.categoria_id = ct.id
                    where pr.id = $1
                    `, [id]);
                    if(producto.rows.length ==0){
                        reject("No se encontró un producto con el id: " + id)
                    }
                    return resolve(producto.rows[0])
            }catch(error){
                return reject("Error al cargar el producto.");
            }
        })
    }

    getPaginacionProductos(limit, offset,){
        return new Promise(async (resolve, reject) => {
            try{
                let productos = await db.query(
                    `
                    SELECT pr.id, pr.nombre, pr.descripcion, pr.precio, pr.descuento, pr.stock, ct.nombre as categoria from productos pr
                    INNER JOIN categorias ct
                    ON pr.categoria_id = ct.id
                    OFFSET $1 LIMIT $2
                    `, [offset, limit]);
                    resolve(productos.rows)

            }catch(error){
                return reject("Error al cargar los productos.");
            }
        })
    }

    deleteProducto(id){
        return new Promise(async (resolve, reject) => {
            let resultado = await db.query("DELETE ")
        })

    }

}

export default Producto;