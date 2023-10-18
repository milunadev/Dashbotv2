import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Dashlet4 = ({data_dashlet4}) => {
    
    const ChartData = {
        series: [{
             data: Object.values(data_dashlet4)
          }],
          options: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                borderRadius: 4,
                horizontal: true,
              }
            },
            dataLabels: {
              enabled: false
            },
            xaxis: {
              categories: Object.keys(data_dashlet4)
            },
            
          },
    }

    return(
        <div className='DashletContainer'>
            <h1 className='text-blue-900 font-bold font-mono text-xl text-center' >TOP USUARIOS</h1>
            {ChartData ? (
                <ReactApexChart options={ChartData.options} series={ChartData.series} type="bar" height={350} />
            ) : (
                <p>Cargando datos...</p>
            )}
        </div>
       
    );
}

export {Dashlet4}