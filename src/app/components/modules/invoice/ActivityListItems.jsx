import { Box, Button, ListItem, Typography } from '@mui/material'
import React from 'react'

export default function ActivityListItems({ cont1, cont2, cont3, cont4 ,PColor}) {
    return (
        <ListItem sx={{
            width: '100%',
            display: 'flex',
            justifyContent:'space-between',
            borderBottom:'1px solid #D5D5D5',
            py:2
        }}>
            <Box sx={{width:'30%'}}>
                <Typography component='h6' sx={{fontWeight:400 , fontSize:12}}>{cont1}</Typography>
                <Typography component='h4' sx={{fontWeight:500 , fontSize:15}}>{cont2}</Typography>

            </Box>
            <Typography component='h4'>{cont3}</Typography>
            <Typography component='h4' sx={{color: PColor}}>{cont4}</Typography>
            
        </ListItem>
    )
}