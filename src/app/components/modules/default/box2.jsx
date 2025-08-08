import { Box, Typography } from '@mui/material'
import React from 'react'

export default function InfoBoxType2({ back, icon, iconBack, content1, content2 }) {
    return (
        <Box sx={{
            width: { xs: '100%',md:'45%', lg: '100%' },
            p: 2,
            display: 'flex',
            m: {xs: 2 , lg: 1},
            borderRadius: 2,
            color: 'white',
            backgroundColor: back
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: iconBack, borderRadius: 2, color: 'white', width: '60px', height: '60px', cursor: 'pointer', m: 0 }}>
                {icon}
            </Box>
            <Box sx={{ ml: 2 }}>
                <Typography component='h2' sx={{ fontSize: '20px', fontWeight: 700 }}>
                    {content1}

                </Typography>
                <Typography component='h4' sx={{ fontSize: '16px', fontWeight: 700, color: 'purple.light' }}>
                    {content2}
                </Typography>
            </Box>
        </Box>
    )
}
