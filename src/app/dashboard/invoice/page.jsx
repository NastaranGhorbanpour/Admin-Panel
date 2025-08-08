import ActivityListItems from '@/app/components/modules/invoice/ActivityListItems'
import InsightsListItems from '@/app/components/modules/invoice/InsightsListItems'
import QuickAddBox from '@/app/components/modules/invoice/quickAddBox'
import ReportBox from '@/app/components/modules/invoice/ReportBox'
import SupportListItem from '@/app/components/modules/invoice/SupportListItem'
import { Box, Button, List, ListItem, Typography } from '@mui/material'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import React from 'react'
import TrendsBarChart from '@/app/components/modules/invoice/TrendsBarChart'

export default function page() {
  return (
    <Box>
      <Box sx={{ width: '100%', p: 2, borderRadius: 2, display: 'flex', justifyContent: 'center', alignContent: 'center', flexWrap: 'wrap', backgroundColor: 'white' }}>
        <Typography component='h1' sx={{ fontSize: 30, fontWeight: 500, width: '90%', my: 3 }}>
          Quick Add
        </Typography>
        <QuickAddBox content1={'Client'} content2={'85'} />
        <QuickAddBox content1={'Items'} content2={'965'} />
        <QuickAddBox content1={'Invoices'} content2={'70'} />

        <QuickAddBox content1={'Quotes'} content2={'140'} />
        <QuickAddBox content1={'Purchase Order'} content2={'450'} />
        <QuickAddBox content1={'Bill'} content2={'1256'} />
      </Box>

      <Box sx={{ width: '100%', borderRadius: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <ReportBox cont1={'New'} cont2={'180'} chartColor={'#8A8A8A'} />
        <ReportBox cont1={'Paid'} cont2={'25,890'} chartColor={'#57CE74'} />
        <ReportBox cont1={'Pending'} cont2={'3400'} chartColor={'#7B59BE'} />
        <ReportBox cont1={'Overdue'} cont2={'55,865'} chartColor={'#FBB9A4'} />
        {/* not finished */}
      </Box>

      <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>
        <Box sx={{ width: { xs: '100%', md: '45%', lg: '60%' }, borderRadius: 2, backgroundColor: 'white', p: 2 , mr:4 }}>
          <Box sx={{p:3 , mb:3}}>
            <Typography sx={{color:'gray' , }}>Total Revenue Trends</Typography>
            <Typography sx={{fontWeight:700 , fontSize:35}}>$999.00</Typography>
          </Box>
          <TrendsBarChart />
        </Box>

        <List sx={{
          backgroundColor: 'white',
          borderRadius: 2,
          width: { xs: '100%', md: '45%', lg: '35%' },
          p: 2
        }}>
          <ListItem>
            <Typography component='h2' sx={{ fontWeight: 700, fontSize: 22 }}>Client Insights</Typography>
          </ListItem>
          <InsightsListItems cont1={'Agilulf Fuxg'} cont2={'10% Loss'} cont3={'£5678.09'} />
          <InsightsListItems cont1={'Hazle'} cont2={'10% Loss'} cont3={'£5678.09'} />
          <InsightsListItems cont1={'Herman Essertg'} cont2={'10% Loss'} cont3={'£5678.09'} />
          <InsightsListItems cont1={'Adaline Bergfalks'} cont2={'10% Profit'} cont3={'£5678.09'} />
          <InsightsListItems cont1={'Wilhelmine Durrg'} cont2={'10% Profit'} cont3={'£5678.09'} />
          <Button sx={{ width: '100%', display: 'flex', justifyContent: 'center' }} variant="text">View All </Button>
        </List>


      </Box>

      <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap',my:2 }}>
        <List sx={{
          width: { xs: '100%', md: '45%', lg: '60%' },
          borderRadius: 2,
          backgroundColor: 'white',
          p: 2,mr:5
        }}>
          <ListItem sx={{ fontWeight: 700, fontSize: 22 }}>
            Recent Activity
          </ListItem>
          <ActivityListItems cont1={'#0697'} cont2={'09/05/2023'} cont3={'Adaline Bergfalks'} cont4={'£5678.09'} PColor={'myGreen'} />
          <ActivityListItems cont1={'#0697'} cont2={'09/05/2023'} cont3={'Agilulf Fuxg'} cont4={'£5678.09'} PColor={'myGreen'} />
          <ActivityListItems cont1={'#0697'} cont2={'09/05/2023'} cont3={'Peahen'} cont4={'- £5678.09'} PColor={'myRed'} />
          <ActivityListItems cont1={'#0697'} cont2={'09/05/2023'} cont3={'Wilhelmine Durrg'} cont4={'£5678.09'} PColor={'myGreen'} />
          <ActivityListItems cont1={'#0697'} cont2={'09/05/2023'} cont3={'Herman Essertg'} cont4={'- £5678.09'} PColor={'myRed'} />
          <ActivityListItems cont1={'#0697'} cont2={'09/05/2023'} cont3={'Eadwulf Beckete'} cont4={'- £5678.09'} PColor={'myRed'} />
          <Button sx={{ width: '100%', display: 'flex', justifyContent: 'center', my: 1 }} variant="text">View All </Button>


        </List>

        <List sx={{
          width: { xs: '100%', md: '45%', lg: '35%' },
          borderRadius: 2,
          backgroundColor: 'white',
          p: 2
        }}>

          <ListItem sx={{ fontWeight: 700, fontSize: 22, mb: 1 }}>
            Support & Help
          </ListItem>
          <SupportListItem icon={<ReceiptOutlinedIcon fontSize='large' sx={{ color: 'myGreen.dark' }} />} cont={'Invoice detail'} iconBg={'myGreen.light'} />
          <SupportListItem icon={<PersonAddOutlinedIcon fontSize='large' sx={{ color: 'blue.dark' }} />} cont={'How to add client'} iconBg={'blue.light'} />
          <SupportListItem icon={<ReceiptLongOutlinedIcon fontSize='large' sx={{ color: 'purple.dark' }} />} cont={'How to add bill'} iconBg={'purple.light'} />
          <SupportListItem icon={<InsertChartOutlinedOutlinedIcon fontSize='large' sx={{ color: '#FEE588' }} />} cont={'Create invoice'} iconBg={'#FFF9EB'} />
          <SupportListItem icon={<ErrorOutlineOutlinedIcon fontSize='large' sx={{ color: 'myRed.dark' }} />} cont={'Generate Error'} iconBg={'myRed.light'} />
          <Button sx={{ width: '100%', display: 'flex', justifyContent: 'center', my: 2, p: 2, borderTop: '1px solid gray' }} variant="text">View All </Button>


        </List>
      </Box>

    </Box>
  )
}
