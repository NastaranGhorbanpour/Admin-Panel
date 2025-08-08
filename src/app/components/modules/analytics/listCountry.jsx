import { Box, ListItem, Typography } from '@mui/material'
import React from 'react'

export default function ListCountryItems({ image, cont1, cont2, cont3 }) {
    return (
        <ListItem sx={{ p: 0 }}>
            <Box sx={{
                width: '100%', p: 2,
                display: 'flex',
                flexWrap: 'wrap',
                alignContent: 'center',
                justifyContent:'space-between',
                borderTop: '1px solid #E3E8EF'
            }}>
                <img src={image} alt="" />
                <Typography>{cont1}</Typography>
                <Typography>{cont2}</Typography>
                <Typography>{cont3}</Typography>
            </Box>
        </ListItem>
    )
}