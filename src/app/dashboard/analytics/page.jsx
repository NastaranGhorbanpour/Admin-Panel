'use client'
import React from 'react'
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Box, Button, List, ListItem, ListItemButton, Typography } from '@mui/material';
import InfoBox from '@/app/components/modules/analytics/Box';
import InfoBox2 from '@/app/components/modules/analytics/Box2';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import InfoBox3 from '@/app/components/modules/analytics/Box3';
import RssFeedOutlinedIcon from '@mui/icons-material/RssFeedOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';
import ListItems from '@/app/components/modules/analytics/listPrices';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ListCountryItems from '@/app/components/modules/analytics/listCountry';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import '@/../../public/font/css/fontello.css'
import MarketShareLineChart from '@/app/components/modules/analytics/lineChart';

export default function page() {
    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: { sx: 'repeat(1 ,1fr)', md: 'repeat(3 ,1fr)' }, gridTemplateRows: { sx: 'repeat(6,1fr)', md: 'repeat(5,1fr)' } }}>

            <Box sx={{ backgroundColor: 'white', gridColumn: '1 / span 2', gridRow: '1 / span 2', m: 1, borderRadius: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
                    <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: 22 }}>Market Share</Typography>
                        <Typography sx={{ color: 'myGray' }}>Department wise monthly sales report</Typography>
                    </Box>
                    <Typography sx={{ fontWeight: 700, fontSize: 22 }}>27, 695.65</Typography>
                </Box>

                <Box sx={{ display: 'flex', px: 3, alignItems: 'center', mb: 5 }}>
                    <i className='icon-facebook-rect p-2 bg-[#EDE7F5] mr-2 rounded-md text-[#643CB3] text-2xl'></i>
                    <Typography sx={{ fontWeight: 700, mr: 2 }}>+ 45.36%</Typography>

                    <i className=' icon-twitter p-2 bg-[#EDE7F5] mr-2 rounded-md text-[#3195EF] text-2xl'></i>
                    <Typography sx={{ fontWeight: 700, mr: 2 }}>- 50.69%</Typography>



                    <i className='  icon-youtube-play p-2 bg-[#FAE6E6] mr-2 rounded-md text-[#ED4C3E] text-2xl'></i>
                    <Typography sx={{ fontWeight: 700, mr: 2 }}>+ 16.85%</Typography>
                </Box>

                <MarketShareLineChart />



            </Box>

            <Box sx={{ gridColumn: '3 / span 1', backgroundColor: 'white', m: 1, display: 'flex', flexWrap: 'wrap', borderRadius: 2 }}>

                <InfoBox3 cont1={'1000'} cont2={'SHARES'} icon={<ShareOutlinedIcon sx={{ fontSize: 50, color: 'purple.dark', backgroundColor: '#E4F2FC', borderRadius: 3, p: 1 }} />} />
                <InfoBox3 cont1={'600'} cont2={'NETWORK'} icon={<RssFeedOutlinedIcon sx={{ fontSize: 50, color: 'purple.dark', backgroundColor: '#E4F2FC', borderRadius: 3, p: 1 }} />} />
                <InfoBox3 cont1={'3550'} cont2={'RETURNS'} icon={<CreditCardOutlinedIcon sx={{ fontSize: 50, color: 'purple.dark', backgroundColor: '#E4F2FC', borderRadius: 3, p: 1 }} />} />
                <InfoBox3 cont1={'100%'} cont2={'ORDER'} icon={<WorkspacesOutlinedIcon sx={{ fontSize: 50, color: 'purple.dark', backgroundColor: '#E4F2FC', borderRadius: 3, p: 1 }} />} />
            </Box>

            <Box sx={{ gridRow: '2 / span 2', borderRadius: 2, m: 1, backgroundColor: 'white' }}>
                <Typography component='h2' sx={{ m: 2, fontSize: '30', fontWeight: '700' }}>
                    Total Revenue
                </Typography>
                <List >

                    <ListItems icon={<ArrowDropUpOutlinedIcon sx={{ color: '#39C65C' }} />} cont1={'Bitcoin'} cont2={'+$145.85'} />
                    <ListItems icon={<ArrowDropDownOutlinedIcon sx={{ color: '#ED4C3E' }} />} cont1={'Ethereum'} cont2={'-$6.368'} />
                    <ListItems icon={<ArrowDropUpOutlinedIcon sx={{ color: '#39C65C' }} />} cont1={'Ripple'} cont2={'+$458.63'} />
                    <ListItems icon={<ArrowDropDownOutlinedIcon sx={{ color: '#ED4C3E' }} />} cont1={'Neo'} cont2={'-$5.631'} />
                    <ListItems icon={<ArrowDropDownOutlinedIcon sx={{ color: '#ED4C3E' }} />} cont1={'Ethereum'} cont2={'-$6.368'} />
                    <ListItems icon={<ArrowDropUpOutlinedIcon sx={{ color: '#39C65C' }} />} cont1={'Ripple'} cont2={'+$458.63'} />
                    <ListItems icon={<ArrowDropDownOutlinedIcon sx={{ color: '#ED4C3E' }} />} cont1={'Neo'} cont2={'-$5.631'} />



                </List>
            </Box>



            <Box sx={{ gridColumn: '1 / span 2', display: 'flex', flexWrap: 'wrap' }}>
                <InfoBox cont1={'Revenue'} cont2={'$42,562'} cont3={'$50,032 Last Month'} icon={<PaidOutlinedIcon sx={{ fontSize: 100, color: '#B29ED9', }} />} back={'purple.dark'} />

                <InfoBox cont1={'Orders Received'} cont2={'486'} cont3={'20% Increase'} icon={<AccountCircleOutlinedIcon sx={{ fontSize: 100, color: 'blue.light', }} />} back={'blue.dark'} />
            </Box>

            <Box sx={{ backgroundColor: 'white', borderRadius: 2, m: 2, gridColumn: '1 / span 2', gridRow: '4 / span 2' }}>
                <Typography component='h2' sx={{ m: 2, fontSize: '30', fontWeight: '700' }}>
                    Latest Customers
                </Typography>
                <List>
                    <ListItem></ListItem>
                    <ListCountryItems image={'/image/uk.jpeg'} cont1={'United Kingdom'} cont2={'Lori Moore'} cont3={'8.65%'} />
                    <ListCountryItems image={'/image/usa.jpeg'} cont1={'USA'} cont2={'John Deo'} cont3={'25.23%'} />
                    <ListCountryItems image={'/image/ge.jpeg'} cont1={'Germany'} cont2={'Angelina Jolly'} cont3={'56.23%'} />
                    <ListCountryItems image={'/image/au.jpeg'} cont1={'Australia'} cont2={'Jenifer Vintage'} cont3={'12.45%'} />
                    <ListCountryItems image={'/image/br.jpeg'} cont1={'Brazil'} cont2={'Allianz Dacron'} cont3={'3.56%'} />

                    <Button sx={{ width: '100%', display: 'flex', justifyContent: 'center' , borderTop:'1px solid #E3E8EF'}} variant="text">View All </Button>

                </List>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <InfoBox2 cont1={'1,658'} cont2={'Daily user'} icon={<AccountCircleOutlinedIcon sx={{ fontSize: 100, color: '#B29ED9' }} />} back={'purple.dark'} />

                <InfoBox2 cont1={'1K'} cont2={'Daily page view'} icon={<DescriptionOutlinedIcon sx={{ fontSize: 100, color: 'blue.light' }} />} back={'blue.dark'} />

            </Box>


        </Box>
    )
}
