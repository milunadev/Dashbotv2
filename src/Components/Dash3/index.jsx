import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashlet3 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Realiza la solicitud GET al servidor backend para obtener los datos de la base de datos
    axios.get('http://localhost:3000/consultas')
      .then((response) => {
        setData(response.data);
        console.log('DATAAA: ',response.data)
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  return (
    <div>
      {/* Renderiza los datos obtenidos de la base de datos */}
      
      {data.map((item) => (
        <div key={item.id}>
          <p>Fecha: {item.fecha}</p>
          <p>Consulta: {item.consulta}</p>
        </div>
      ))}
    </div>
  );
};

export {Dashlet3};
