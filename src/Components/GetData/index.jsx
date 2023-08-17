import axios from 'axios';
import { backend_url } from '../variables';

function getLast14Days() {
  const today = new Date();
  const days = [];

  for (let i = 0; i < 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${month}-${day}`;
    days.push(formattedDate);
  }
  
  return days.reverse();
}

function generarInforme(consultas) {
  const last14Days = getLast14Days();
  const informe = {};

  for (const day of last14Days) {
    informe[day] = 0;
  }

  for (const consulta of consultas) {
    const fechaConsulta = new Date(consulta.fecha).toISOString().split('T')[0];
    const monthDay = fechaConsulta.substring(5, 10); // Obtenemos el formato mes-día

    if (informe.hasOwnProperty(monthDay)) {
      informe[monthDay]++;
    }
  }
  console.log(informe)
  return informe;
}

async function consultar() {
  try {
    const response = await axios.get(`${backend_url}/consultas`);
    const respuesta_DB = response.data;
    console.log('respuestaDB: ', respuesta_DB);
    return respuesta_DB;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    return []; // Retorna un array vacío en caso de error.
  }
}



export {generarInforme, consultar}