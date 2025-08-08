import { Box, Typography } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';

export default function QuickAddBox({ content1, content2, }) {
    return (
        <Box sx={{
            width: { xs: '45%', md: '30%', lg: '15%' },
            borderRadius: 2,
            flexGrow: 0, flexBasis: 'auto',
            p: 2, m: 1,
            border: '1px solid #E3E8EF',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            transition: '0.4s', ':hover': { boxShadow: '0 0 10px rgba(0,0,0,0.5)' },
            position:'relative'
        }}>
            <Box>
                <Typography component='h2' sx={{ fontSize: '16px', fontWeight: 400,mb:2 }}>
                    {content1}

                </Typography>
                <Typography component='h4' sx={{ fontSize: '25px', fontWeight: 700 }}>
                    {content2}
                </Typography>
            </Box>
            <AddIcon fontSize='large' sx={{
                cursor: 'pointer',
                borderRadius: 2,
                border: '1px solid #E3E8EF',
                ':hover': { backgroundColor: '#F5F5F5' }, transition: '0.4s',
                position:'absolute',
                right:8,bottom:8
            }} />
        </Box>
    )
}
