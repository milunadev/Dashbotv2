import React, { useEffect, useState } from 'react';
import { generarInforme, contarConsultas, contarDominios, contarUsuarios } from '../GetData/index.jsx'; // Asegúrate de importar estas funciones
import { consultar } from '../GetData/index.jsx';
import { Dashlet2 } from '../Dashlets/Dash2';
import { Dashlet1 } from '../Dashlets/Dash1';
import { Dashlet3 } from '../Dashlets/Dash3';
import { Dashlet4 } from '../Dashlets/Dash4';

const DashletUtilizacion = () => {
  const [dataDB_dashlet1, setdataDBDashlet1] = useState(null);
  const [data, setData] = useState([]);
  const [dataDB_dashlet2, setDataDBDashlet2] = useState(null); // Declarar dataDB_dashlet2 como estado
  const [dataDB_dashlet3, setDataDBDashlet3] = useState(null); // Declarar dataDB_dashlet2 como estado
  const [dataDB_dashlet4, setDataDBDashlet4] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataDB = await consultar();
        setData(dataDB);

        const dataDB_dashlet1 = generarInforme(dataDB);
        const dataDB_dashlet2 = contarConsultas(dataDB); // Contar las consultas aquí y asignar a dataDB_dashlet2
        const dataDB_dashlet3 = contarDominios(dataDB);
        const dataDB_dashlet4 = contarUsuarios(dataDB);
        // Transformar los datos para que se ajusten al formato de ApexCharts

        setdataDBDashlet1(dataDB_dashlet1);
        setDataDBDashlet2(dataDB_dashlet2); // Actualizar el estado de dataDB_dashlet2
        setDataDBDashlet3(dataDB_dashlet3); 
        setDataDBDashlet4(dataDB_dashlet4); 
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
        {dataDB_dashlet3 && <Dashlet3 data_dashlet3={dataDB_dashlet3} />}
        {dataDB_dashlet4 && <Dashlet4 data_dashlet4={dataDB_dashlet4} />}
      </div>
    </>
  );
};

export { DashletUtilizacion };
