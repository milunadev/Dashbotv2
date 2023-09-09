import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Dashlet3 = ({ data_dashlet3}) => {
    console.log(data_dashlet3)

    const chartData = {
        series: [
            {
              name: "TOP USUARIOS ",
              data: Object.values(data_dashlet3) ,
            },
          ],
          options: {
            chart: {
              type: 'bar',
              height: 350,
            },
            plotOptions: {
              bar: {
                borderRadius: 0,
                horizontal: true,
                barHeight: '80%',
                isFunnel: true,
              },
            },
            dataLabels: {
              enabled: true,
              formatter: function (val, opt) {
                return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val
              },
              dropShadow: {
                enabled: true,
              },
            },
            
            xaxis: {
              categories: Object.keys(data_dashlet3)
            },
            legend: {
              show: false,
            },
            colors: [
                '#F44F5E',
                '#E55A89',
                '#D863B1',
                '#CA6CD8',
                '#B57BED',
                '#8D95EB',
                '#62ACEA',
                '#4BC3E6',
              ],
          },
    }

    return(
    <div className='DashletContainer'>
            <h1 className='text-blue-900 font-bold font-mono text-xl text-center' >TOP PARTNERS</h1>
            {chartData ? (
                <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
            ) : (
                <p>Cargando datos...</p>
            )}
    </div>
        
    
    )
}

export {Dashlet3}