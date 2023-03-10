import express from 'express';
const router = express.Router();

import { controllerHome, controllerDetalleProducto, controllerInventario, controllerVistaModificar } from '../controllers/views.controller.js'
router.get(["/", "/home"], controllerHome, (req, res) =>{});

router.get("/productos/detalle/:id", controllerDetalleProducto, (req, res) =>{});

router.get("/inventario", controllerInventario, (req, res) =>{});

router.get("/productos/detalle/modificar/:id", controllerVistaModificar, (req, res) =>{});




export default router;

