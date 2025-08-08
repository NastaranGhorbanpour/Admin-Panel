import { Box, Typography } from '@mui/material'
import React from 'react'

export default function InfoBox({ cont1, cont2, cont3, icon, back }) {
    return (
        <Box sx={{
            width: {xs:'100%' , lg:'45%'},
            p: 2, m: 2,
            display: 'flex',
            alignItems:'center',
            backgroundColor:back,
            borderRadius:2,
            position:'relative'
        }}>
            <Box sx={{width:'50%', '*':{color:'white' }  }}>
                <Typography component='h4' sx={{fontSize:16}}>{cont1}</Typography>
                <Typography component='h2' sx={{fontSize:27, fontWeight:500}}>{cont2}</Typography>
                <Typography component='h4' sx={{fontSize:16}}>{cont3}</Typography>
            </Box>
            <Box sx={{
                position:'absolute',
                right:30,
                top:40
            }}>
                {icon}
            </Box>
        </Box>
    )
}
