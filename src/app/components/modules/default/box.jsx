import { Box, Typography } from '@mui/material'
import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


export default function InfoBox({ back, icon, iconBg, Content1, Content2 }) {
    return (


        <Box sx={{
            position: 'relative',
            width: { xs: '100%', lg: '45%' },
            m: {xs: 2 , lg:1},
            borderRadius: 2,
            color: 'white',
            backgroundColor: back,
            p: 3,
        }}>
            <MoreHorizIcon sx={{ position: 'absolute', backgroundColor: iconBg, width: '50px', height: '50px', borderRadius: 2, p: 1, top: 15, right: 15 }} />
            <Box sx={{ backgroundColor: iconBg, borderRadius: 2, color: 'white', width: '60px', height: '60px', p: 2, cursor: 'pointer', m: 0 }}>
                {icon}
            </Box>
            <Typography component='h2' sx={{ fontSize: '43px', fontWeight: 500, mt: 3 }}>
                {Content1}

            </Typography>
            <Typography component='h4' sx={{ fontSize: '24px', fontWeight: 500, color: 'purple.light' }}>
                {Content2}
            </Typography>



        </Box>
    )
}
