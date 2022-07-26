import React from "react";
import ReactEcharts from "echarts-for-react"; 
function OverAllGraph() {  
const option = {
    title: {
      text: 'OverAll'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['A', 'B', 'C', 'D', 'E']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        dataView: { readOnly: false },
        magicType: { type: ['line', 'bar','pie'] },
        restore: {},
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['22/06/07 09:00', '22/06/07 10:00', '22/06/07 11:00', '22/06/07 12:00', '22/06/07 13:00', '22/06/07 14:00', '22/06/07 15:00']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'A',
        type: 'line',
      
        data: [10, 20, 30, 40,60,80,100]
      },
      {
        name: 'B',
        type: 'line',
       
        data: [50, 60, 72, 90,100,110,112]
      },
      {
        name: 'C',
        type: 'line',
      
        data: [ 30, 60, 74, 80,90,100,110]
      },
      {
        name: 'D',
        type: 'line',
      
        data: [12, 40, 64, 70,80,90,100]
      },
      {
        name: 'E',
        type: 'line',
       
        data: [ 20, 30, 54, 90,110,120,130]
      }
    ]
  };
return <ReactEcharts option={option} />;
} 
export default OverAllGraph;
