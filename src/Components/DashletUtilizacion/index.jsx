import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { generarInforme} from '../GetData/index.jsx';
import { consultar } from '../GetData/index.jsx';


const DashletUtilizacion = () => {
  const [chartData, setChartData] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataDB = await consultar();
        setData(dataDB);
        console.log('data setdata: ', dataDB);
        
        const dataDB_utilizacion = generarInforme(dataDB);

        // Transformar los datos para que se ajusten al formato de ApexCharts
        const fechas = Object.keys(dataDB_utilizacion);
        const consultas = Object.values(dataDB_utilizacion);

        const chartData = {
          series: [
            {
              name: "Sesiones",
              data: consultas,
            },
          ],
          options: {
            chart: {
              id: "line-chart",
            },
            xaxis: {
              categories: fechas,
            },
          },
        };
        
        setChartData(chartData);
      } catch (error) {
        console.error('Error al obtener y procesar los datos:', error);
      }
    };
    
    fetchData();
  }, []);

  return (
    
    <div className='dashletgroup'>
        
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
        
        
        <div>
            {data.map((item) => (
            <div key={item.id}>
                <p>Fecha: {item.fecha}</p>
                <p>Consulta: {item.consulta}</p>
            </div>
            ))} 
        </div>
    </div>
  );
};

export { DashletUtilizacion };
