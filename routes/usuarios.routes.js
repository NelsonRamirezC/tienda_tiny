import express from 'express';
import { getClientes, getCliente, getClientesFilter } from '../controllers/clientes.controller.js'
const router = express.Router();

router.get("/api/clientes", getClientes, (req, res) =>{});

router.get("/api/clientes/:id", getCliente, (req, res) =>{});

router.get("/api/filter/clientes", getClientesFilter, (req, res) =>{});




export default router;