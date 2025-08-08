import { Box, ListItem, Typography } from '@mui/material'
import React from 'react'

export default function ListItems({ icon, cont1, cont2, cont3 }) {
    return (
        <ListItem sx={{ p: 0 }}>
            <Box sx={{
                width: '100%', p: 1,
                display: 'flex',
                flexWrap: 'wrap',
                alignContent: 'center',
                justifyContent:'space-between',
                borderTop: '1px solid #E3E8EF'
            }}>

                <Box sx={{
                    width: '30%',
                    display: 'flex', flexWrap:'wrap'
                }}>
                    <Typography component='h4' sx={{fontSize:18, fontWeight:500}}>{cont1}</Typography>
                    <Typography component='h4' sx={{fontSize:16}}>{cont2}</Typography>
                </Box>
                <Typography component='h4'>{cont3}</Typography>
                {icon}
            </Box>
        </ListItem>
    )
}