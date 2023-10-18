import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Dashlet1 = ({ data_dashlet1}) => {
 

  const fechas = Object.keys(data_dashlet1);
  const consultas = Object.values(data_dashlet1);

  const chartData = {
    series: [
      {
        name: 'Sesiones',
        data: consultas,
      },
    ],
    options: {
      chart: {
        id: 'line-chart',
      },
      xaxis: {
        categories: fechas,
      },
      
    },
  };

  return (
    <div className='DashletContainer'>
      <h1 className='text-blue-900 font-bold font-mono text-xl text-center' >UTILIZACION DE SECUBOT</h1>
      {chartData ? (
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height={350}
        />
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export { Dashlet1 };
