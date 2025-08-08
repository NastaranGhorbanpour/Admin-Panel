import { Box, Button, FormControlLabel, IconButton, InputBase, Paper, Switch, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';





export default function Header({ toggleSidebar }) {
  const [search, setSearch] = useState(false)
  const [seting, setSeting] = useState(false)

  return (
    <header className="flex items-center justify-between p-4 bg-white sticky top-0 z-50">


      <div className="flex items-center gap-4 lg:hidden">
        {/* <img className='w-[140px] h-[50px] ' src='../image/logo.png' alt="" /> */}
        <IconButton sx={{ transition: '0.4s', p: 2, backgroundColor: '#EDE7F5', borderRadius: 2, ':hover': { backgroundColor: '#5b37ad' }, ':hover .child': { color: 'white' } }} onClick={toggleSidebar}>
          <MenuIcon className='child' sx={{ color: '#5b37ad' }} />
        </IconButton>

        <IconButton onClick={() => setSearch(true)} sx={{
          transition: '0.4s',
          p: 2,
          backgroundColor: '#EDE7F5',
          borderRadius: 2,
          ':hover': { backgroundColor: '#5b37ad' },
          ':hover .child': { color: 'white' },
          visibility: search ? 'hidden' : 'visible'
        }}>
          <SearchIcon className='child' sx={{ color: '#5b37ad' }} />
        </IconButton>
      </div>


      <Box sx={{
        display: { xs: search ? 'flex' : 'none', lg: 'none' },
        width: '100%',
        position: 'absolute',

        top: 2, left: 2
      }}>
        <Paper
          component="form"
          sx={{
            height: '100px',
            zIndex: '10000',
            p: '2px 6px',
            display: 'flex',
            alignItems: 'center',
        width: '100%',
            backgroundColor: '#F8FAFC',
            border: '1px solid #BDBDBD',
            borderRadius: 2,


          }}
        >
          <IconButton type="button" sx={{ p: '7px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
          />
          <IconButton onClick={() => setSearch(false)} type="button" sx={{ p: '7px' }} aria-label="search">
            <CloseIcon />
          </IconButton>


        </Paper>

      </Box>


      {/* search btn lg*/}
      <Box>
        <Paper
          component="form"
          sx={{
            height: '60px',
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: '250px',
            backgroundColor: '#F8FAFC',
            visibility: { xs: 'hidden', lg: 'visible' },
            border: '1px solid #BDBDBD',
            borderRadius: 2

          }}
        >
          <IconButton type="button" sx={{ p: '7px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
          />


        </Paper>

      </Box>


      {/* seting */}
      <div onClick={() => setSeting(!seting)} className='cursor-pointer relative right-1  flex justify-between items-center bg-[#E4F2FC] p-2 rounded-4xl *:mx-2'>
        <img className='w-13 h-13 rounded-4xl object-cover  ' src="../image/me.jpg" alt="" />
        <IconButton >
          <SettingsIcon sx={{ fontSize: 30, color: '#3597EF' }} />
        </IconButton>
      </div>

      <Box sx={{
        position: 'absolute',
        display: seting ? 'block' : 'none',
        backgroundColor: 'white',
        zIndex: 1000,
        top: '100px',
        right: '15px',
        boxShadow: '0 10px 10px 15px rgba(0,0,0,0.5)',
        width: '340px',
        p: 2,
        borderRadius: 2
      }}>
        <Typography component='h2' sx={{ fontWeight: 700, fontSize: '23px' }} >
          Good Morning
        </Typography>
        <Typography component='h2' sx={{ fontWeight: 400, fontSize: '16px', color: 'gray' }} >
          Admin Page
        </Typography>
        <Paper
          component="form"
          sx={{
            my: 2,
            height: '60px',
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#F8FAFC',
            border: '1px solid #BDBDBD',
            borderRadius: 2

          }}
        >
          <IconButton type="button" sx={{ p: '7px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Profile Options"
          />


        </Paper>

        <Box sx={{ py: 2, borderTop: '1px solid gray' }}>
          <Box sx={{ backgroundColor: '#FFF8E2', p: 2, borderRadius: 2 }}>
            <Typography component='h3' sx={{ fontWeight: 700, mb: 2, fontSize: '20px' }}>
              Upgrade your plan

            </Typography >
            <Typography component='h6' sx={{ color: '#717270', fontWeight: 400 }}>
              70% discount for 1 years
              subscriptions.
            </Typography >
            <Button variant="contained" sx={{ backgroundColor: '#FEE588', color: '#374151', my: 2 }}>Go Premium</Button>

          </Box>
        </Box>

        <Box sx={{ py: 2, borderTop: '1px solid gray' }}>
          <Box sx={{
            backgroundColor: '#E4F2FC',
            p: 2,
            borderRadius: 2,
          }}>

            <FormControlLabel labelPlacement="start" control={<Switch defaultChecked />} label="Start DND Mode" />
            <FormControlLabel labelPlacement="start" control={<Switch defaultChecked />} label="Allow Notifications" />

          </Box>
        </Box>


      </Box>
    </header>
  );
}