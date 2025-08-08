import Boxs from '@/app/components/modules/CRM/Boxs'
import SummaryLineChart from '@/app/components/modules/CRM/SummaryLineChart'
import { Box, Typography } from '@mui/material'
import React from 'react'
import ViewQuiltOutlinedIcon from '@mui/icons-material/ViewQuiltOutlined';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import SourcePie from '@/app/components/modules/CRM/SourcePie';
import SaleBoxs from '@/app/components/modules/CRM/SaleBoxs';
import SalesBarChart from '@/app/components/modules/CRM/SalesBarChart';


export default function page() {
    return (
        <Box>
            <Box sx={{
                width: '100%',
                backgroundColor: 'white',
                borderRadius: 2,
                p: 2
            }}>
                <Typography sx={{ fontWeight: 700, fontSize: 20, my: 2, pb: 2, borderBottom: '1px solid #79848C' }}>Lead Summary</Typography>
                <Typography sx={{ fontSize: 12, color: 'myGray' }}>Total Growth</Typography>
                <Typography sx={{ fontSize: 18, fontWeight: 600 }}>$2324.00</Typography>
                <SummaryLineChart />
            </Box>

            <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Boxs icon={<ViewQuiltOutlinedIcon fontSize='large' sx={{ color: 'white' }} />} cont1={'$203k'} cont2={'Total Income'} iconbg={'#1F65BC'} />
                <Boxs icon={<VideoCameraFrontOutlinedIcon fontSize='large' sx={{ color: '#C0322E' }} />} cont1={'$120k'} cont2={'Meeting attends'} iconbg={'#FAE6E6'} />
                <Boxs icon={<StorefrontOutlinedIcon fontSize='large' sx={{ color: '#FCC236' }} />} cont1={'$234k'} cont2={'Sales improve'} iconbg={'#FFF8E2'} />
                <Boxs icon={<PersonAddAltOutlinedIcon fontSize='large' sx={{ color: '#FCC236' }} />} cont1={'$234k'} cont2={'New users'} iconbg={'#FFF8E2'} />
            </Box>

            <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', my: 2 }}>
                <Box sx={{ borderRadius: 2, backgroundColor: 'white', mr: 2, pb: 3, width: { xs: '100%', lg: '35%' } }}>
                    <Typography sx={{ fontWeight: 700, fontSize: 20, p: 2 }}>Lead Source</Typography>
                    <SourcePie />
                </Box>

                <Box sx={{width:{xs:'100%' , lg:'60%'},borderRadius: 2, backgroundColor: 'white', mr: 2, pb: 3}}>
                    <Typography sx={{ fontWeight: 700, fontSize: 20, p: 3 }}>Sales Performance</Typography>
                    <Box sx={{display:'flex' , flexWrap:'wrap'}}>
                        <SaleBoxs cont1={'200'} cont2={'Conversion Rate'}/>
                        <SaleBoxs cont1={'120'} cont2={'Average Deal'}/>
                        <SaleBoxs cont1={'234'} cont2={'Sales Target'}/>
                    </Box>
                    <SalesBarChart/>
                </Box>
            </Box>
        </Box>

    )
}
