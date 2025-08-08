import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function SourcePie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 30, label: 'Social Media', color: '#3195EF' },
            { id: 1, value: 35, label: 'Website', color: '#643CB3' },
            { id: 3, value: 20, label: 'Phone Call', color: '#B19ED8' },
            { id: 4, value: 25, label: 'Mail', color: '#94C9F6' },
            { id: 5, value: 15, label: 'Message', color: '#6A7585' },
          ],
        },
      ]}
      width={200}
      height={200}
      slotProps={{
        legend: {
          position: { vertical: 'bottom', horizontal: 'middle' },
          direction: 'row',
        },
      }}
    />
  );

  9

}