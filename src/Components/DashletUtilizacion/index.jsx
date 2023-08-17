import React, { useEffect, useState } from 'react';
import { generarInforme, contarConsultas } from '../GetData/index.jsx'; // Asegúrate de importar estas funciones
import { consultar } from '../GetData/index.jsx';
import { Dashlet2 } from '../Dash2';
import { Dashlet1 } from '../Dash1';


const DashletUtilizacion = () => {
  const [dataDB_dashlet1, setdataDBDashlet1] = useState(null);
  const [data, setData] = useState([]);
  const [dataDB_dashlet2, setDataDBDashlet2] = useState(null); // Declarar dataDB_dashlet2 como estado

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataDB = await consultar();
        setData(dataDB);

        const dataDB_dashlet1 = generarInforme(dataDB);
        const dataDB_dashlet2 = contarConsultas(dataDB); // Contar las consultas aquí y asignar a dataDB_dashlet2

        // Transformar los datos para que se ajusten al formato de ApexCharts

        setdataDBDashlet1(dataDB_dashlet1);
        setDataDBDashlet2(dataDB_dashlet2); // Actualizar el estado de dataDB_dashlet2
        console.log('data setdata: ', data);
      } catch (error) {
        console.error('Error al obtener y procesar los datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className='dashboardtitle'> DASHBOARD DE MÉTRICAS DE UTILIZACIÓN DE SECUBOT</h1>
      <div className='dashletgroup'> 
        {dataDB_dashlet1 && <Dashlet1 data_dashlet1={dataDB_dashlet1} />}
        {dataDB_dashlet2 && <Dashlet2 data_dashlet2={dataDB_dashlet2} />} {/* Renderizar Dashlet2 si dataDB_dashlet2 existe */}
      </div>
    </>
  );
};

export { DashletUtilizacion };
