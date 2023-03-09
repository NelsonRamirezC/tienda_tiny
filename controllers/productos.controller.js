import db from '../db/db.js'

export const getProductos = async (req, res) => {
    try{
        let resultados = await db.query(
            `
            select pr.id, pr.nombre, pr.descripcion, pr.precio, ct.nombre as categoria from productos pr
            inner join categorias ct
            ON pr.categoria_id = ct.id
            `);
        res.status(200).json({code: 200, data: resultados.rows})
    }catch(error){
        console.log(error)
        res.status(500).json({code: 500, message:"Error interno del servidor."})
    }
}


export const getProducto = async (req, res) => {
    try{
        let {id} = req.params;
        let regex = /^[0-9]$/;
        if(!regex.test(id)) return res.status(400).json({code: 200, message:"erorr al ingresar el id, por favor, verifique."})
        let resultados = await db.query(
            `
            select pr.id, pr.nombre, pr.descripcion, pr.precio, ct.nombre as categoria from productos pr
            inner join categorias ct
            ON pr.categoria_id = ct.id
            where pr.id=$1
            `, [id]);
        if(resultados.rows.length == 0) return res.status(400).json({code: 203, message:"El producto buscado no existe."})
        res.status(200).json({code: 200, data: resultados.rows[0]})
    }catch(error){
        console.log(error)
        res.status(500).json({code: 500, message:"Error interno del servidor."})
    }
}

export const getProductosFilter = async (req, res) => {
    try{
        let limit = req.query.limit || 5;
        let offset = req.query.offset || 0;
        let resultados = await db.query(
            `
            select pr.id, pr.nombre, pr.descripcion, pr.precio, ct.nombre as categoria from productos pr
            inner join categorias ct
            ON pr.categoria_id = ct.id
            offset $1 limit $2
            `, [offset, limit]);
        res.status(200).json({code: 200, data: resultados.rows})
    }catch(error){
        console.log(error)
        res.status(500).json({code: 500, message:"Error interno del servidor."})
    }
}
