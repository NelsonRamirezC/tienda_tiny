import db from '../db/db.js'

export const getClientes = async (req, res) => {
    try{
        let resultados = await db.query("select nombres, apellidos, rut, email, telefono, direccion, estado from clientes");
        res.status(200).json({code: 200, data: resultados.rows})
    }catch(error){
        console.log(error)
        res.status(500).json({code: 500, message:"Error interno del servidor."})
    }
}


export const getCliente = async (req, res) => {
    try{
        let {id} = req.params;
        let regex = /^[0-9]$/;
        if(!regex.test(id)) return res.status(400).json({code: 200, message:"erorr al ingresar el id, por favor, verifique."})
        let resultados = await db.query("select nombres, apellidos, rut, email, telefono, direccion, estado from clientes where id=$1", [id]);
        if(resultados.rows.length == 0) return res.status(400).json({code: 203, message:"El usuario buscado no existe."})
        res.status(200).json({code: 200, data: resultados.rows[0]})
    }catch(error){
        console.log(error)
        res.status(500).json({code: 500, message:"Error interno del servidor."})
    }
}

export const getClientesFilter = async (req, res) => {
    try{
        let limit = req.query.limit || 5;
        let offset = req.query.offset || 0;

        let resultados = await db.query("select nombres, apellidos, rut, email, telefono, direccion, estado from clientes offset $1 limit $2", [offset, limit]);
        res.status(200).json({code: 200, data: resultados.rows})
    }catch(error){
        console.log(error)
        res.status(500).json({code: 500, message:"Error interno del servidor."})
    }
}
