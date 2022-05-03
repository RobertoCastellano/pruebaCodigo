const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')
const port = 3005;

// Aceptamos recibir el body con JSON
	app.use(express.json());
	app.use(cors());

// parse application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
	app.use(bodyParser.json())
	
// Añadimos las rutas	
	const favs = require('./routers/favoritos');

	app.use ('/favoritos', favs);


	app.use((req, res, next) => {
		res.status(404).sendFile(__dirname + "/public/404.html");
	  });

	app.listen(port, ()=>{
		console.log(`Acabamos de conectarnos http://localhost:${port}`);
	})