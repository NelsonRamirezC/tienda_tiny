import db from '../db/db.js'
import Producto from '../models/productos.model.js';

export const controllerHome = async (req, res) => {
    try{
        let producto = new Producto();
        let resultado = producto.getProductos();
        resultado.then(productos => {

                res.render("home", {
                    productos,
                })

            }).catch(error => {
                res.render("home", {
                    error: true,
                    message: "No se pudo hacer la carga de productos."
                })
            })
    }catch(error){
        res.render("home", {
            error: true,
            message: "Ha ocurrido un error en el servidor."
        })
    }
}

export const controllerDetalleProducto = async (req, res) => {
    try{
        let {id} = req.params;
        let regex = /^[0-9]$/;
        if(!regex.test(id)){
            res.render("detalleProducto", {
                error: true,
                message:"Ha ingresado un ID no inválido"
            })
        }

        let objProducto = new Producto();
        let resultado =  objProducto.getProductoPorId(id);
        resultado.then(producto => {

                res.render("detalleProducto", {
                    producto,
                })

            }).catch(err => {
                res.render("detalleProducto", {
                    error: true,
                    message: err
                })
            })
    }catch(error){
            res.render("detalleProducto", {
                error: true,
                message: "Ha ocurrido un error al intentar buscar el producto."
            })
    }
}

export const controllerInventario = async (req, res) => {
    try{
        let producto = new Producto();
        let resultado = producto.getProductos();
        resultado.then(productos => {

                res.render("inventario", {
                    productos,
                })

            }).catch(error => {
                res.render("inventario", {
                    error: true,
                    message: "No se pudo hacer la carga de productos."
                })
            })
    }catch(error){
        res.render("inventario", {
            error: true,
            message: "Ha ocurrido un error en el servidor."
        })
    }
}

export const controllerVistaModificar = async (req, res) => {
    try{
        let {id} = req.params;
        let regex = /^[0-9]$/;
        if(!regex.test(id)){
            res.render("modificarProducto", {
                error: true,
                message:"Ha ingresado un ID no inválido"
            })
        }

        let objProducto = new Producto();
        let resultado =  objProducto.getProductoPorId(id);
        resultado.then(producto => {

                res.render("modificarProducto", {
                    producto,
                })

            }).catch(err => {
                res.render("modificarProducto", {
                    error: true,
                    message: err
                })
            })
    }catch(error){
            res.render("modificarProducto", {
                error: true,
                message: "Ha ocurrido un error al intentar buscar el producto."
            })
    }
}
