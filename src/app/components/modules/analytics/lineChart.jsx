
import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function MarketShareLineChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 4,5,6,7] , position:'none' }]}
      yAxis={[{ position:'none' }]}
      hideLegend
      series={[
        {
          data : [10, 90, 65, 85, 40, 80, 30],
          color:'#643CB3',
          label:'faceBook',
          showMark: false,
          valueFormatter: (value) => (value == null ? 'NaN' : value.toString()),
          
        },
        {
          data:[5, 50, 40, 55, 20, 40, 20],
           color:'#2C87E1',
           label: 'twitter',
           showMark: false,
        },
        {
          data:[50, 30, 25, 15, 60, 10, 25],
          color:'#F16E63',
          showMark: false,
          label:'youTube',
          valueFormatter: (value) => (value == null ? '?' : value.toString()),
        },
      ]}
      height={250}
      margin={0}
      
    />
  );
}



// //               ,

//             

//               ,

//              ,

//               ,
//               ,
