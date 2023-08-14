import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './style.css';
import { utilizacion_7days } from '../GetData/index.jsx';

const Dashboard = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchChartData = async () => {
      const objetito = await utilizacion_7days();
      console.log('DASH1: ', objetito);

      // Transformar los datos para que se ajusten al formato de ApexCharts
      const categories = Object.keys(objetito);
      const data = Object.values(objetito);

      const chartData = {
        series: [
          {
            name: "Sesiones",
            data: data,
          },
        ],
        options: {
          chart: {
            id: "line-chart",
          },
          xaxis: {
            categories: categories,
          },
        },
      };

      setChartData(chartData);
    };

    fetchChartData();
  }, []);

  return (
    <div className='DashletContainer'>
      <h1>Utilización del bot</h1>
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

export { Dashboard };
