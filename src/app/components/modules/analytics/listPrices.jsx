import { Box, ListItem, Typography } from '@mui/material'
import React from 'react'

export default function ListItems({ icon, cont1, cont2 }) {
    return (
        <ListItem sx={{ p: 0 }}>
            <Box sx={{
                width: '100%', p: 2,
                display: 'flex',
                flexWrap: 'wrap',
                alignContent: 'center',
                borderTop: '1px solid #E3E8EF'
            }}>

                <Box sx={{
                    width: '80%',
                    display: 'flex', justifyContent: 'space-between'
                }}>
                    {icon}

                    <Typography>{cont1}</Typography>
                    <Typography>{cont2}</Typography>
                </Box>
            </Box>
        </ListItem>
    )
}
