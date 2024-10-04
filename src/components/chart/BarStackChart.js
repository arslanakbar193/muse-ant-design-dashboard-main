import React from 'react';
import ReactECharts from 'echarts-for-react';
import { color } from 'echarts';

const BarStackChart = () => {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // Use axis to trigger tooltip
        type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    legend: {
      data: ['a', 'b', 'c', 'd', 'e']
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'a',
        type: 'bar',
        stack: 'a',
        data: [120, 200, 150, 80, 70, 110, 130],
        itemStyle:{
            color:"#89f0ff"
        }
        
      },
      {
        name: 'b',
        type: 'bar',
        stack: 'a',
        data: [0, 46, 64, '-', 0, '-', 0],
        itemStyle:{
            color:"#5abedd",
            borderRadius: [10, 10, 0, 0],
            
        }
       
        
      },
      {
        name: 'c',
        type: 'bar',
        stack: 'a',
        data: [30, '-', 0, 20, 10, '-', 0],
        itemStyle:{
            color:" #ace189",
            
        }
        
       
      },
      {
        name: 'd',
        type: 'bar',
        stack: 'a',
        data: [30, '-', 0, 20, 10, '-', 0],
        itemStyle:{
            color:" #18d5a7",
            borderRadius: [10, 10, 0, 0],
        }
      },
      {
        name: 'e',
        type: 'bar',
        stack: 'b',
        data: [10, 20, 150, 0, '-', 50, 10],
        itemStyle: {
            color: '#008FFB', 
            borderRadius: [10, 10, 0, 0],
          },
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: 400, width: '100%' }} />;
};

export default BarStackChart;