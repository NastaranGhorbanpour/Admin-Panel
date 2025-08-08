import * as React from 'react';
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';

export default function BasicArea() {
  return (
    <LineChart
      xAxis={[{ data: [0, 1, 2, 3, 4, 5, 6], position: 'none' }]}
      yAxis={[{ position: 'none' }]}
      series={[
        {
          data: [0, 15, 10, 50, 30, 40, 25],
          area: true,
          color: '#A798D0',
          showMark: false,
        },
      ]}
      height={100}
      margin={0}
    />
  );
}