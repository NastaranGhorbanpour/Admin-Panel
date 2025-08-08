'use client'
import AnalyticsBarChart from '@/app/components/modules/blog/AnalyticsBarChart'
import AnalyticsBox from '@/app/components/modules/blog/AnalyticsBox'
import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function Blog() {
    const [time , setTime] = useState('Views (7 days)')
    const x = [...Array(31).keys()]

    function choesWeek(){
        setTime('Views (7 days)')
        console.log(x);
        
    }
    function choesMonth(){
        setTime('Views (30 days)')
    }
    function choesAll(){
        setTime('Views (All time)')
    }
  return (
    <Box>
        <Box sx={{width:'100%' , borderRadius:2 , backgroundColor:'white' , p:2}}>
            <Typography sx={{p:2 , fontWeight:500 , fontSize:20 , borderBottom:'1px solid #E3E8EF'}}>Analytics Summary</Typography>

            <Box sx={{borderRadius:2 , backgroundColor:'#EEF2F6' , p:2,my:2 , display:'flex' , flexWrap:'wrap'}}>
                <AnalyticsBox cont1={'50'} cont2={'Views (7 days)'} set={choesWeek} state={time}/>
                <AnalyticsBox cont1={'1230'} cont2={'Views (30 days)'} set={choesMonth} state={time}/>
                <AnalyticsBox cont1={'20,987'} cont2={'Views (All time)'} set={choesAll} state={time}/>
            </Box>
                <AnalyticsBarChart 
                cont2={'Views (7 days)'}
                none={[12, 0, 8, 4, 5, 0, 7, 10, 0, 6, 0, 9, 11, 14, 0, 7, 5, 8, 0, 2, 0, 4, 8, 10, 6, 5, 9, 0, 0, 3]}
                blogViews={[0, 5, 0, 0, 0, 8, 0, 0, 3, 0, 7, 0, 0, 0, 9, 0, 0, 0, 13, 0, 12, 0, 0, 0, 0, 0, 0, 6, 11, 0]}
                state={time}
                />
                <AnalyticsBarChart 
                cont2={'Views (30 days)'}
                none={[4, 16, 7, 7, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 22, 6, 11, 7, 3, 4, 6, 8, 10, 8, 0, 0, 0, 0, 0]}
                blogViews={[0,0,0,0,6,7,10,18,10,12,0,14,11,7,10,0,0,0,0,0,0,0,0,0,0,15,12,6,4,2]}
                state={time}
                />
                <AnalyticsBarChart 
                cont2={'Views (All time)'}
                none={[0,12,0,0,6,0,10,0,9,0,0,0,0,11,0,0,10,0,0,7,0,0,12,0,0,0,14,0,0,5]}
                blogViews={[8,0,7,9,0,3,0,7,0,15,15,12,7,0,6,8,0,7,4,0,10,13,0,8,6,9,0,2,7,0]}
                state={time}
                />

            <Box>

            </Box>

        </Box>
    </Box>
  )

}
