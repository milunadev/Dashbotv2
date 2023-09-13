import axios from 'axios';
import { backend_url } from '../variables';

function getLast14Days() {
  const today = new Date();
  const dates = [];

  for (let i = 0; i < 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    dates.push(formattedDate);
  }

  return dates.reverse() ;
}

function convertFechas(data) {
  const newData = data.map(item => {
    const fechaISO = new Date(item.fecha);
    const year = fechaISO.getUTCFullYear();
    const month = (fechaISO.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = fechaISO.getUTCDate().toString().padStart(2, '0');
    const formattedFecha = `${year}-${month}-${day}`;
    return {
      consulta: item.consulta,
      fecha: formattedFecha
    };
  });
  console.log(newData)
  return newData;
}

function formatDatesToDayMonth(obj) {
  const formattedObj = {};
  for (const date in obj) {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit'
    });

    const [month, day] = formattedDate.split('/');
    const formattedDayMonth = `${day}-${month}`;
    
    formattedObj[formattedDayMonth] = obj[date];
  }
  return formattedObj;
}


function generarInforme(data1) {
  const last14Days = getLast14Days();
  console.log(last14Days);
  const utilizacion_fecha = {}
  console.log('data1: ', data1)
  const data = convertFechas(data1)
  console.log(data)
  data.forEach((consulta) => {
      const fechaConsulta = consulta.fecha;
      if (last14Days.includes(fechaConsulta)) {
        if (utilizacion_fecha[fechaConsulta]) {
          utilizacion_fecha[fechaConsulta]++;
        } else {
          utilizacion_fecha[fechaConsulta] = 1;
        }
      }
    });
  console.log(utilizacion_fecha)
  const utilizacion_fecha_format = formatDatesToDayMonth(utilizacion_fecha)
  return utilizacion_fecha_format ;
}

function contarConsultas(data) {
  const contador = {};

  // Contar la concurrencia de cada valor de "consulta"
  data.forEach((item) => {
    const consulta = item.consulta;
    contador[consulta] = contador[consulta] ? contador[consulta] + 1 : 1;
  });

  // Generar la lista de objetos en el formato deseado
  const resultado = Object.keys(contador).map((consulta) => ({
    x: consulta,
    y: contador[consulta],
  }));

  return resultado;
}

function contarDominios(data) {
  const contador = {};

  // Contar la concurrencia de cada valor de "dominio"
  data.forEach((item) => {
    const dominio = item.dominio;
    contador[dominio] = contador[dominio] ? contador[dominio] + 1 : 1;
  });

  // Convertir el objeto contador en un array de pares clave-valor
  const contadorArray = Object.entries(contador);

  // Ordenar el array en orden descendente según el valor
  contadorArray.sort((a, b) => b[1] - a[1]);

  // Tomar los primeros 10 elementos del array
  const top10Dominios = contadorArray.slice(0, 10);

  // Convertir el resultado en un objeto
  const resultado = {};
  top10Dominios.forEach(([dominio, contador]) => {
    resultado[dominio] = contador;
  });

  return resultado;
}


function contarUsuarios(data) {
  const contador = {};

  // Contar la concurrencia de cada valor de "consulta"
  data.forEach((item) => {
    const usuario = item.persona;
    contador[usuario] = contador[usuario] ? contador[usuario] + 1 : 1;
  });

  // Convertir el objeto contador en un array de pares clave-valor
  const contadorArray = Object.entries(contador);

  // Ordenar el array en orden descendente según el valor
  contadorArray.sort((a, b) => b[1] - a[1]);

  // Tomar los primeros 10 elementos del array
  const top10Usuarios = contadorArray.slice(0, 10);

  // Convertir el resultado en un objeto
  const resultado = {};
  top10Usuarios.forEach(([usuario, contador]) => {
    resultado[usuario] = contador;
  });

  return resultado;
}


async function consultar() {
  try {
    const response = await axios.get(`${backend_url}/consultas`);
    const respuesta_DB = response.data;
    
    return respuesta_DB;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    return []; // Retorna un array vacío en caso de error.
  }
}



export {generarInforme, consultar, contarConsultas, contarDominios, contarUsuarios}