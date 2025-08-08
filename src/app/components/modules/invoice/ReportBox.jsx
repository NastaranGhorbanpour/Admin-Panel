import { Box, Typography } from '@mui/material'
import React from 'react'
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';


export default function ReportBox({ cont1, cont2 , chartColor  }) {
  return (
    <Box sx={{
      width: { xs: '100%', md: '45%', lg: '23%' },
      backgroundColor: 'white',
      p: 2, my: 2, mx: 1,
      borderRadius: 2
    }}>
      <Typography component='h4' sx={{ color: 'myGray' }}>{cont1}</Typography>
      <Typography component='h4' sx={{ fontWeight: 700, fontSize: 18 }}>{cont2}</Typography>
      {/* nemodar */}

      <LineChart
        xAxis={[{ data: [0, 1, 2, 3, 4, 5, 6], position: 'none' }]}
        yAxis={[{ position: 'none' }]}
        series={[
          {
            data: [2, 1, 2, 1, 1, 3, 0],
            curve: "linear",
            label: cont1,
            color: chartColor,
            showMark: false,
            
          },
        ]}
        hideLegend
        height={40}
        margin={0}
      />
      {/* nemodar */}
    </Box>
  )
}
