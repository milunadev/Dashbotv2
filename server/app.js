// app.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000; // El puerto que desees utilizar para el servidor backend

// Configura CORS para permitir solicitudes desde tu aplicación de React (puerto 3000)
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// Configura la conexión a la base de datos MySQL en AWS
const connection = mysql.createConnection({
  host: 'database-1.caf9eyf7qxj2.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'Africa44!',
  database: 'BotLog', // El nombre de tu base de datos
});

// Ruta para realizar una consulta a la base de datos
app.get('/consultas', (req, res) => {
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
app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});
