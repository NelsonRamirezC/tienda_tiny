import db from '../db/db.js'

export const controllerHome = async (req, res) => {
    try{
        let productos = await db.query(
            `
            select pr.id, pr.nombre, pr.descripcion, pr.precio, pr.descuento, pr.stock,  ct.nombre as categoria from productos pr
            inner join categorias ct
            ON pr.categoria_id = ct.id
            `);

            res.render("home", {
                productos: productos.rows,
            })
    }catch(error){
            res.render("home", {
                error: true
            })
    }
}

export const controllerDetalleProducto = async (req, res) => {
    try{
        let {id} = req.params;
        let regex = /^[0-9]$/;
        if(!regex.test(id)){
            res.render("detalleProducto", {
                error: true
            })
        }

        let productos = await db.query(
            `
            select pr.id, pr.nombre, pr.descripcion, pr.precio, pr.descuento, pr.stock, ct.nombre as categoria from productos pr
            inner join categorias ct
            ON pr.categoria_id = ct.id
            where pr.id = $1
            `, [id]);

            res.render("detalleProducto", {
                producto: productos.rows[0],
            })
    }catch(error){
            res.render("detalleProducto", {
                error: true
            })
    }
}

export const controllerInventario = async (req, res) => {
    try{
        let productos = await db.query(
            `
            select pr.id, pr.nombre, pr.descripcion, pr.precio, pr.descuento, pr.stock, ct.nombre as categoria from productos pr
            inner join categorias ct
            ON pr.categoria_id = ct.id
            `);

            res.render("inventario", {
                productos: productos.rows,
            })
    }catch(error){
            res.render("inventario", {
                error: true
            })
    }
}

export const controllerModificar = async (req, res) => {
    try{
        let {id} = req.params;
        let regex = /^[0-9]$/;
        if(!regex.test(id)){
            res.render("detalleProducto", {
                error: true
            })
        }

        let productos = await db.query(
            `
            select pr.id, pr.nombre, pr.descripcion, pr.precio, pr.descuento, pr.stock, ct.nombre as categoria from productos pr
            inner join categorias ct
            ON pr.categoria_id = ct.id
            where pr.id = $1
            `, [id]);

            res.render("modificarProducto", {
                producto: productos.rows[0],
            })
    }catch(error){
            res.render("modificarProducto", {
                error: true
            })
    }
}
