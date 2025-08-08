import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box } from '@mui/system';
import { ChartsLegend } from '@mui/x-charts/ChartsLegend';

const Investment = [2, 2.3, 2.5, 2.3, 2, 2.3, 2.7];
const Loss = [1.8, 2.3, 1.8, 2.5, 2.3, 1.8, 2.5];

const xLabels = [
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sun',

];

export default function TrendsBarChart() {
  const series = [
        { data: Investment , label: 'Investment', id: 'Investment', stack: 'total', color:'#3195EF' },
        { data: Loss , label: 'Loss', id: 'Loss', stack: 'total',color:'#E4F2FC' },
        
      ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <BarChart
        height={300}
        width={600}
        series={series}
        xAxis={[{ data: xLabels  }]}
        yAxis={[{ max: 6.0  }]}
        hideLegend
        grid={{ horizontal: true }}
      />

    </Box>
  );
}
