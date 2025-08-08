import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Boxs({ icon, cont1, cont2 , iconbg }) {
    return (
        <Box sx={{
            width: { xs: '100%', md: '45%', lg: '23%' },
            backgroundColor: 'white',
            p: 2, my: 2, mx: 1,
            borderRadius: 2,
            display:'flex',
            alignItems:'center'
        }}>
            <Box sx={{mr:2 , backgroundColor:iconbg , borderRadius:2 , p:1}}>
                {icon}
            </Box>
            <Box>
                <Typography sx={{fontWeight:700 , fontSize:20}}>{cont1}</Typography>
                <Typography sx={{color:'myGray' , fontSize:12}}>{cont2}</Typography>
            </Box>


        </Box>
    )
}
