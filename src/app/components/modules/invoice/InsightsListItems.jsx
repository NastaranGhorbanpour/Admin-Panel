import { Box, Button, ListItem, Typography } from '@mui/material'
import React from 'react'

export default function InsightsListItems({ cont1, cont2, cont3 }) {
    return (
        <ListItem sx={{
            width: '100%',
            display: 'flex',
            justifyContent:'space-between',
            borderBottom:'1px solid #D5D5D5',
            py:1
        }}>
            <Box sx={{width:'30%'}}>
                <Typography component='h4' sx={{fontWeight:500 , fontSize:15}}>{cont1}</Typography>
                <Typography component='h6' sx={{fontWeight:400 , fontSize:12}}>{cont2}</Typography>

            </Box>
            <Typography component='h4'>{cont3}</Typography>
            <Button variant="text" sx={{color:'#3195EF'}}>History</Button>
        </ListItem>
    )
}
