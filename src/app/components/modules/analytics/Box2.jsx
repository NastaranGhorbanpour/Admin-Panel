import { Box, Typography } from '@mui/material'
import React from 'react'

export default function InfoBox2({ cont1, cont2, cont3, icon, back }) {
    return (
        <Box sx={{
            width: '100%',
            p: 2, m: 2,
            display: 'flex',
            backgroundColor: back,
            borderRadius: 2,
            position: 'relative',
            overflow:'hidden'
        }}>
            <Box sx={{
                width: '100%',
                '*': { color: 'white', width: '100%', fontWeight: 500, textAlign: 'center' },
                display: 'flex', flexWrap: 'wrap',
                
            }}>
                <Typography component='h2' sx={{ fontSize: 20 }}>{cont1}</Typography>
                <Typography component='h4' sx={{ fontSize: 16 }}>{cont2}</Typography>
            </Box>
            <Box sx={{
                position: 'absolute',
                left: -25,
                bottom: -25,
                transform : 'rotate(35deg)'
            }}>
                {icon}
            </Box>
        </Box>
    )
}