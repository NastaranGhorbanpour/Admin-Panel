import React from 'react'


import WalletIcon from '@mui/icons-material/Wallet';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import InfoBox from '@/app/components/modules/default/box';
import InfoBoxType2 from '@/app/components/modules/default/box2';
import ListItems from '@/app/components/modules/default/ListItems';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import GrowthBarChart from '@/app/components/modules/default/BarChart';
import BasicArea from '@/app/components/modules/default/ListLineChart';

import { Box, List, Typography } from '@mui/material'


export default function page() {
  return (
    <Box component='section'
      sx={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
      }}>

      <Box sx={{ width: { xs: '100%', lg: '60%' }, display: 'flex' }}>
        <InfoBox back={'purple.dark'} icon={<WalletIcon />} iconBg={'purple.veryDark'} Content1={'$500.00'} Content2={'Total Earning'} />

        <InfoBox back={'blue.dark'} icon={<LocalMallIcon />} iconBg={'blue.veryDark'} Content1={'$108'} Content2={'Total Order'} />

      </Box>

      <Box sx={{ width: { xs: '100%', lg: '40%' }, display: 'flex', flexWrap: 'wrap' }}>

        <InfoBoxType2 back={'blue.dark'} icon={<LocalAtmIcon fontSize='large' />} iconBack={'blue.veryDark'} content1={'$203k'} content2={'Total Income '} />

        <InfoBoxType2 back={'#c9b474'} icon={<StorefrontIcon fontSize='large' />} iconBack={'#f4d061'} content1={'$203k'} content2={'Total Income '} />

      </Box>



      <Box sx={{ width: { xs: '100%', md: '60%' }, backgroundColor: 'white', my: 3, mx: 1, p: 3, borderRadius: 2 }}>
        <Typography component='h4' sx={{ fontSize: 14, fontWeight: 400, color: 'myGray' }}>Total Growth</Typography>
        <Typography component='h2' sx={{ fontSize: 20, fontWeight: 700, my: 1 }}>$2,324.00</Typography>
        <GrowthBarChart />
      </Box>

      <Box sx={{ width: { xs: '100%', md: '35%' }, backgroundColor: 'white', my: 3, mx: 1, p: 3, borderRadius: 2 }}>
        <Typography component='h2' sx={{ fontSize: 20, fontWeight: 700 }}>
          Popular Stocks
        </Typography>
        {/* nemodar */}

        <Box sx={{ my: 2, backgroundColor: '#EDE7F5', borderRadius: 2, position: 'relative' }}>
          <Box sx={{p:2}}>
            <Typography component='h4' sx={{color:'#5B37AD' , fontWeight:500 , fontSize:18}}>Bajaj Finery</Typography>
            <Typography component='h6'>10% Profit</Typography>
          </Box>
          <BasicArea />

        </Box>

        {/* nemodar */}
        <List>
          <ListItems icon={<ArrowDropUpOutlinedIcon sx={{ color: '#39C65C', backgroundColor: '#BEF5CC', borderRadius: 2 }} />} cont1={'Bajaj Finery'} cont2={'10% Profit'} cont3={'$1839.00'} />
          <ListItems icon={<ArrowDropDownOutlinedIcon sx={{ color: '#D24A24', backgroundColor: '#FAE9E7', borderRadius: 2 }} />} cont1={'TTML'} cont2={'10% loss'} cont3={'$100.00'} />
          <ListItems icon={<ArrowDropUpOutlinedIcon sx={{ color: '#39C65C', backgroundColor: '#BEF5CC', borderRadius: 2 }} />} cont1={'Reliance'} cont2={'10% Profit'} cont3={'$200.00'} />
          <ListItems icon={<ArrowDropDownOutlinedIcon sx={{ color: '#D24A24', backgroundColor: '#FAE9E7', borderRadius: 2 }} />} cont1={'TTML'} cont2={'10% loss'} cont3={'$189.00'} />
          <ListItems icon={<ArrowDropDownOutlinedIcon sx={{ color: '#D24A24', backgroundColor: '#FAE9E7', borderRadius: 2 }} />} cont1={'Stolon'} cont2={'10% loss'} cont3={'$189.00'} />
        </List>
      </Box>






    </Box>
  )
}
