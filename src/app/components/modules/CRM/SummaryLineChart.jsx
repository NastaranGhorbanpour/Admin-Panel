import * as React from 'react';
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';

export default function SummaryLineChart() {
    const yAxis = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct']
  return (
    <LineChart
      xAxis={[{scaleType: 'point', data: yAxis ,disableLine: false, disableTicks: false}]}
      yAxis={[{ max:300 ,disableLine: false, disableTicks: false }]}
      series={[
        {
          data: [0, 220, 60, 120, 60, 250, 60, 60, 0, 50],
          area: false,
          curve:'linear',
          color: '#4DA3F1',
          showMark: false,
        },
      ]}
      
      height={300}
      margin={0}
    />
  );
}
// 
// 
