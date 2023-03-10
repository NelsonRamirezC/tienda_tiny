import express from 'express';
import { getProductos, getProducto, getProductosFilter } from '../controllers/productos.controller.js'
const router = express.Router();

router.get("/api/productos", getProductos, (req, res) =>{});

router.get("/api/productos/:id", getProducto, (req, res) =>{});

//RUTA ELIMINAR pendiente....
router.delete("/api/productos/:id", (req, res) => {})

router.get("/api/filter/productos", getProductosFilter, (req, res) =>{});




export default router;