const data = [
    {
        "consulta": "duo",
        "fecha": "1899-11-30T00:00:00.000Z"
    },
    {
        "consulta": "duo",
        "fecha": "2023-08-04T00:00:00.000Z"
    },
    {
        "consulta": "umbrella",
        "fecha": "2023-08-04T00:00:00.000Z"
    },
    {
        "consulta": "xdr",
        "fecha": "2023-08-03T00:00:00.000Z"
    },
    {
        "consulta": "duo",
        "fecha": "2023-08-02T00:00:00.000Z"
    },
    {
        "consulta": "ise",
        "fecha": "2023-07-30T00:00:00.000Z"
    },
    {
        "consulta": "duo",
        "fecha": "2023-08-01T00:00:00.000Z"
    },
    {
        "consulta": "duo",
        "fecha": "2023-07-30T00:00:00.000Z"
    },
    {
        "consulta": "duo",
        "fecha": "2023-08-02T00:00:00.000Z"
    },
    {
        "consulta": "data breach",
        "fecha": "2023-08-07T00:00:00.000Z"
    },
    {
        "consulta": "umbrella",
        "fecha": "2023-08-07T00:00:00.000Z"
    },
    {
        "consulta": "phishing",
        "fecha": "2023-08-07T00:00:00.000Z"
    },
    {
        "consulta": "ransomware",
        "fecha": "2023-08-07T00:00:00.000Z"
    },
    {
        "consulta": "data breach",
        "fecha": "2023-08-07T00:00:00.000Z"
    },
    {
        "consulta": "malware",
        "fecha": "2023-08-07T00:00:00.000Z"
    },
    {
        "consulta": "duo",
        "fecha": "2023-08-07T00:00:00.000Z"
    },
    {
        "consulta": "umbrella",
        "fecha": "2023-08-07T00:00:00.000Z"
    },
    {
        "consulta": "umbrella",
        "fecha": "2023-08-07T00:00:00.000Z"
    },
    {
        "consulta": "umbrella",
        "fecha": "2023-08-08T00:00:00.000Z"
    },
    {
        "consulta": "duo",
        "fecha": "2023-08-13T00:00:00.000Z"
    },
    {
        "consulta": "umbrella",
        "fecha": "2023-08-14T00:00:00.000Z"
    },
    {
        "consulta": "duo",
        "fecha": "2023-08-14T00:00:00.000Z"
    },
    {
        "consulta": "umbrella",
        "fecha": "2023-08-14T00:00:00.000Z"
    },
    {
        "consulta": "data breach",
        "fecha": "2023-08-14T00:00:00.000Z"
    },
    {
        "consulta": "ransomware",
        "fecha": "2023-08-14T00:00:00.000Z"
    },
    {
        "consulta": "phishing",
        "fecha": "2023-08-14T00:00:00.000Z"
    },
    {
        "consulta": "duo",
        "fecha": "2023-08-14T00:00:00.000Z"
    },
    {
        "consulta": "umbrella",
        "fecha": "2023-08-14T00:00:00.000Z"
    },
    {
        "consulta": "duo",
        "fecha": "2023-08-15T00:00:00.000Z"
    },
    {
        "consulta": "duo",
        "fecha": "2023-08-15T00:00:00.000Z"
    },
    {
        "consulta": "umbrella",
        "fecha": "2023-08-15T00:00:00.000Z"
    },
    {
        "consulta": "xdr",
        "fecha": "2023-08-15T00:00:00.000Z"
    },
    {
        "consulta": "duo",
        "fecha": "2023-08-16T00:00:00.000Z"
    },
    {
        "consulta": "umbrella",
        "fecha": "2023-08-16T00:00:00.000Z"
    },
    {
        "consulta": "umbrella",
        "fecha": "2023-08-16T00:00:00.000Z"
    }
]

function contarConsultas(data) {
    const contador = {};
  
    // Contar la concurrencia de cada valor de "consulta"
    data.forEach((item) => {
      const persona = item.persona;
      contador[persona] = contador[persona] ? contador[persona] + 1 : 1;
    });
  
    // Generar la lista de objetos en el formato deseado
    const resultado = Object.keys(contador).map((persona) => ({
      x: persona,
      y: contador[persona],
    }));
  
    return resultado;
  }
  
  const resultadoFinal = contarConsultas(data);
  console.log(resultadoFinal);


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
  convertFechas(data)
 


function getLast14Days() {
    const today = new Date();
    const dates = [];
  
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}T00:00:00.000Z`;
      dates.push(formattedDate);
    }
  
    return dates.reverse() ;
  }
  
  

  function get_utilizacion(data) {
    const last14Days = getLast14Days();
    console.log(last14Days);
    const utilizacion_fecha = {}
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
    return utilizacion_fecha;
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

 const final = formatDatesToDayMonth(get_utilizacion(data))
 console.log(final)