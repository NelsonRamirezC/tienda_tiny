import db from '../db/db.js'

export const controllerHome = async (req, res) => {
    try{
        let productos = await db.query(
            `
            select pr.id, pr.nombre, pr.descripcion, pr.precio, ct.nombre as categoria from productos pr
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
