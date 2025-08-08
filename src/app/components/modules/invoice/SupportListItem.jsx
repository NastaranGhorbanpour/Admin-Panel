import { Box, Button, ListItem, Typography } from '@mui/material'
import React from 'react'

export default function SupportListItem({ icon, cont, iconBg }) {
    return (
        <ListItem sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            py: 2
        }}>
            <Box sx={{backgroundColor:iconBg , borderRadius:2 , p:1}}>
                {icon}
            </Box>
            <Typography component='h2'>{cont}</Typography>
            <Button variant="text" sx={{ color: '#3195EF' }}>view</Button>

        </ListItem>
    )
}
