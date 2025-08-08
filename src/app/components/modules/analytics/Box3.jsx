import { Box, Typography } from '@mui/material'
import React from 'react'

export default function InfoBox3({ cont1, cont2, icon }) {
    return (
        <Box sx={{
            width: { xs: '100%', md: '50%' },
            display: 'flex',
            border: '1px solid gray',
        }}>
            <Box sx={{
                width: '40%',
                height:{xs:'100px', md:'95'},
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                
                
            }}>
                {icon}
            </Box>
            <Box sx={{
                width: '60%',
                '*': { fontSize: 16, fontWeight: 500, width: '100%', textAlign: 'center' },
                display: 'flex',
                alignContent: 'center',
                flexWrap: 'wrap'
            }}>
                <Typography component='h4' >{cont1}</Typography>
                <Typography component='h4' sx={{ color: 'myGray' }}>{cont2}</Typography>
            </Box>

        </Box>
    )
}
