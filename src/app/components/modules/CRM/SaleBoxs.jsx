import { Box, Typography } from '@mui/material'
import React from 'react'

export default function SaleBoxs({cont1 , cont2}) {
  return (
    <Box sx={{
        width:{xs:'100%' , md:'30%'},
        mx:1 ,my:3, p:2,
        backgroundColor:'#EEF2F6',
        borderRadius:2
    }}>
        <Typography sx={{fontWeight:700}}>{cont1}</Typography>
        <Typography>{cont2}</Typography>
    </Box>
  )
}
