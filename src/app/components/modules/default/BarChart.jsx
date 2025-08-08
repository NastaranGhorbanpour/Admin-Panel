import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box } from '@mui/system';

const Investment = [35, 125, 35, 35, 35, 80, 35, 20, 35, 45, 15, 75];
const Loss = [35, 15, 15, 35, 65, 40, 80, 25, 15, 85, 25, 75];
const Profit = [35, 145, 35, 35, 20, 105, 100, 10, 65, 45, 30, 10];
const Maintenance = [0, 0, 75, 0, 0, 115, 0, 0, 0, 0, 150, 0];
const xLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
];

export default function GrowthBarChart() {
  const series = [
    { data: Investment, label: 'Investment', id: 'Investment', stack: 'total', color: '#A4D1F8' },
    { data: Loss, label: 'Loss', id: 'Loss', stack: 'total', color: '#4C99E5' },
    { data: Profit, label: 'Profit', id: 'Profit', stack: 'total', color: '#7B59BE' },
    { data: Maintenance, label: 'Maintenance', id: 'Maintenance', stack: 'total', color: '#EFEBF7' },

  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <BarChart
        height={500}
        width={600}
        series={series}
        xAxis={[{ data: xLabels, categoryGapRatio: 0.5, }]}
        yAxis={[{ max: 400 }]}
        hideLegend
        grid={{ horizontal: true }}
        margin={0}
        // slotProps={{
        //   legend: {
        //     position: { vertical: 'bottom', horizontal: 'middle' },
        //     direction: 'row',
        //   },
        // }}
      />
    </Box>
  );
}
