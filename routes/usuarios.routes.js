import express from 'express';
import { getUsers, getUser, getUserFilter } from '../controllers/users.controller.js'
const router = express.Router();

router.get("/api/usuarios", getUsers, (req, res) =>{});

router.get("/api/usuarios/:id", getUser, (req, res) =>{});

router.get("/api/filter/usuarios", getUserFilter, (req, res) =>{});




export default router;