'use client'

import { Box, Button, Checkbox, FormControl, FormControlLabel, IconButton, InputAdornment, InputLabel, OutlinedInput, Snackbar, Switch, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function SingIn() {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const [email, setEmail] = useState('nastaranGh@gmail.com')
    const [password, setPassword] = useState('123456')
    const router = useRouter()
    const [open, setOpen] = useState(false);



    const handleClick = () => {

        if (password === '123456' && email === 'nastaranGh@gmail.com') {
            router.push('../dashboard/default')
        } else {
            setOpen(true);
        }
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    return (
        <Box component="section" sx={{ display: 'flex', overflow: 'hidden', width: '100%', height: '100vh', position: 'relative' }}>
            <Box sx={{
                width: {
                    xs: '100%',
                    md: '60%'
                },
                p: {
                    xs: 10,
                    md: 17
                },
                display: 'flex',
                justifyContent: 'center'

            }}>
                <form action="" className='flex justify-center flex-wrap'>
                    <img className='w-[200px] mb-5' src={'./image/logo.png'} alt="" />
                    <Typography variant="h1" sx={{mb:1,fontWeight:700 ,fontSize: 30,width:'100%',display:'flex',justifyContent: 'center', color: '#643CB3' }}>
                        Hi, Welcome Back

                    </Typography>
                    <Typography variant="h4" sx={{fontWeight:400, fontSize: 16,width:'100%',display:'flex',justifyContent: 'center', color: '#717C94' }}>
                        Enter your credentials to continue
                    </Typography>

                    <TextField
                        id="filled-multiline-static"
                        label="Email Addres / Username"
                        sx={{ width: '100%', mt: 5, backgroundColor: '#F8FAFC' }}
                        defaultValue="nastaranGh@gmail.com"
                        onChange={(e) => (setPassword(e.target.value))} />



                    <FormControl variant="outlined" fullWidth sx={{mt:3}}>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            value={'123456'}
                            onChange={(e) => setPassword(e.target.value)}
                            label="Password"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                        aria-label="toggle password visibility"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            sx={{
                                borderRadius: 1,
                                backgroundColor: '#F8FAFC',
                                
                            }}
                        />
                    </FormControl>

                    <Box sx={{ my: 3 ,justifyContent:'start',width:'100%' , display:'flex' }}>
                        <FormControlLabel control={<Checkbox defaultChecked />} sx={{fontWeight:400}} label="Keep me logged in" />
                    </Box>
                    <Button onClick={handleClick} variant="contained" sx={{fontWeight:500, width: '100%', height: '45px',backgroundColor:'#643CB3' }} >SING IN</Button>
                    <Snackbar
                        open={open}
                        autoHideDuration={3000}
                        onClose={handleClose}
                        message="Wrong email or password"
                        sx={{ mb: 5 }}
                    />

                </form>
            </Box>
            <div className='absolute -right-40 top-0 w-[50%] h-full hidden md:flex -skew-x-10 overflow-hidden '>
                <div className='hidden md:flex  w-full h-full bg-[url("/image/singInPage.jpg")] '></div>

            </div>

        </Box>
    )
}


