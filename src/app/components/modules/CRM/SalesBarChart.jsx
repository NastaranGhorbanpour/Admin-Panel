import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box } from '@mui/system';

const Investment = [50, 105, 80, 50, 70, 80, 80];
const Loss = [50, 55, 30, 50, 140, 80, 40];
const Maintenance = [50, 150, 120, 110, 180, 150, 130];

const xLabels = [
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sun',

];

export default function SalesBarChart() {
  const series = [
        { data: Investment , label: 'Investment', id: 'Investment', stack: 'total', color:'#E4F2FC' },
        { data: Loss , label: 'Loss', id: 'Loss', stack: 'total',color:'#3195EF' },
        { data: Maintenance , label: 'Maintenance', id: 'Maintenance', stack: 'total',color:'#EFEBF7' },
        
      ];

  return (
      <BarChart
        height={300}
        width={600}
        series={series}
        xAxis={[{ data: xLabels  }]}
        yAxis={[{ max: 400  }]}
        hideLegend
        margin={0}
        grid={{ horizontal: true }}
      />

  );
}
