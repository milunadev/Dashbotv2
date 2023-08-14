// app.js
const express = require('express');
const mysql = require('mysql2');


const app = express();

app.use(express.json());

// Configura la conexión a la base de datos MySQL en AWS
const connection = mysql.createPool({
  host: 'database-1.caf9eyf7qxj2.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'Africa44!',
  database: 'BotLog', // El nombre de tu base de datos
  connectionLimit: 10, // Número máximo de conexiones en el pool
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
app.listen(3000, () => {
  console.log('Servidor backend escuchando en el puerto 3000.');
});
