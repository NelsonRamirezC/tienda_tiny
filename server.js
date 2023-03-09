import express from 'express';
//IMPORTACIÓN DE RUTAS
import routesUsers from './routes/usuarios.routes.js'
import routesProductos from './routes/productos.routes.js'
import routesViews from './routes/views.routes.js'
import { create } from 'express-handlebars'
import cors from 'cors'

import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.listen(3000, () => console.log("http://localhost:3000"))

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

//configuración handlebars

const hbs = create({
	partialsDir: [
		"views/partials/",
	],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));

app.use(routesUsers)
app.use(routesProductos)
app.use(routesViews)

