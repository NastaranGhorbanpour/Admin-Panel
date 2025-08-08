'use client'
import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function AnalyticsBox({ cont1, cont2, set, state }) {
    const [backColor, setBackColor] = useState('white')

    return (
        <div onClick={set} className='xs:w-[100%] lg:w-[30%] mx-4'>
            <Box sx={{
                borderRadius: 2,
                backgroundColor: state == cont2 ? '#3195EF' : 'white',
                p: 2,
                cursor: 'pointer',
            }}>
                <Typography sx={{ fontWeight: 500, fontSize: 18,color: state == cont2? 'white' : 'black' }}>{cont1}</Typography>
                <Typography sx={{ fontSize: 14 ,color: state == cont2? 'white' : 'myGray'}}>{cont2}</Typography>
            </Box>
        </div>
    )
}
