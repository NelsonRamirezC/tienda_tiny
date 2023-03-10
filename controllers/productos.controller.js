import db from '../db/db.js'
import Producto from '../models/productos.model.js';

export const getProductos = async (req, res) => {
    try{
        let producto = new Producto();
        let resultado = producto.getProductos();

        resultado.then(productos => {
            res.status(200).json({code: 200, data: productos})
        }).catch(error => {
            res.status(500).json({code: 500, message: error})
        })
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
        
        let objProducto = new Producto();
        let resultado = objProducto.getProductoPorId(id);

        resultado.then(producto => {
            if(producto.length == 0) return res.status(400).json({code: 203, message:"El producto buscado no existe."})
        res.status(200).json({code: 200, data: producto})
        }).catch(error => {
            console.log(error)
            res.status(500).json({code: 500, message: error})
        })

    }catch(error){
        res.status(500).json({code: 500, message:"Error interno del servidor."})
    }
}

export const getProductosFilter = async (req, res) => {
    try{
        let limit = req.query.limit || 5;
        let offset = req.query.offset || 0;

        let objProducto = new Producto();
        let resultado = objProducto.getPaginacionProductos(limit, offset);

        resultado.then(productos => {
            res.status(200).json({code: 200, data: productos})
        }).catch(err => {
            console.log(err)
            res.status(500).json({code: 500, message: err})
        })


    }catch(error){
        console.log(error)
        res.status(500).json({code: 500, message:"Error interno del servidor."})
    }
}

export const deleteProducto = async (req, res) => {
    try{
        let {id} = req.params;
        let regex = /^[0-9]$/;
        if(!regex.test(id)) return res.status(400).json({code: 200, message:"erorr al ingresar el id, por favor, verifique."})
        
        let objProducto = new Producto();

        //hay que terminar
        let resultado = objProducto.getProductoPorId(id);

        resultado.then(producto => {
            if(producto.length == 0) return res.status(400).json({code: 203, message:"El producto buscado no existe."})
        res.status(200).json({code: 200, data: producto})
        }).catch(error => {
            console.log(error)
            res.status(500).json({code: 500, message: error})
        })

    }catch(error){
        res.status(500).json({code: 500, message:"Error interno del servidor."})
    }
}

deleteProducto
