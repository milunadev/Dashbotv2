// app.js
const mysql = require('mysql2');

const express = require('express');
const app = express();
const PORT= 3001; // El puerto que desees utilizar para el servidor backend

var cors = require('cors');

const corsOptions = {
  origin: ['https:/miluna.dev','https://18.218.138.254',"http://localhost:8080/","http://18.218.138.254/","http://localhost",'http://18.218.138.254:8080/'],  // Cambia esto a la URL de tu frontend
  methods: 'GET,POST,OPTIONS,PUT,PATCH,DELETE',
  allowedHeaders: 'x-access-token,Origin,X-Requested-With,Content-Type,Accept',
};

app.use(cors(corsOptions));

// Configura CORS para permitir solicitudes desde tu aplicación de React (puerto 3000)

// Configura la conexión a la base de datos MySQL en AWS
const connection = mysql.createConnection({
  host: 'database-1.caf9eyf7qxj2.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'Africa44!',
  database: 'BotLog', // El nombre de tu base de datos
});

app.get('/prueba', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'});
});

// Ruta para realizar una consulta a la base de datos
app.get('/consultas', (req, res, next) => {
  const query = 'SELECT * FROM ConsultasLOG'; // Tu consulta SQL aquí

  // Realiza la consulta a la base de datos
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al realizar la consulta:', error);
      res.status(500).json({ error: 'Error al realizar la consulta' });
    } else {
      res.json(results); // Envía los resultados de la consulta como respuesta al cliente (tu aplicación de React)
      console.log("DATOS: ", results)
    }
  });
});

// Inicia el servidor en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
