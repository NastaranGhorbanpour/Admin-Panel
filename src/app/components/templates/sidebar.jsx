'use client'
import { Box, Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import './../../globals.css'
import React, { useEffect, useState } from 'react'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import TimelineIcon from '@mui/icons-material/Timeline';
import DescriptionIcon from '@mui/icons-material/Description';
import GroupIcon from '@mui/icons-material/Group';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PersonIcon from '@mui/icons-material/Person';
import { usePathname } from 'next/navigation';


export default function Sidebar({ isOpen, toggle }) {
    const pathname = usePathname()

    const DashboardList =
        [
            { title: 'Default', icon: <SpaceDashboardIcon />, href: "/dashboard/default" },
            { title: 'Analytics', icon: <TimelineIcon />, href: "/dashboard/analytics" },
            { title: 'Invoice', icon: <DescriptionIcon />, href: "/dashboard/invoice" },
            { title: 'CRM', icon: <GroupIcon />, href: "/dashboard/CRM" },
            { title: 'Blog', icon: <ReceiptLongIcon />, href: "/dashboard/blog" },

        ]
    return (
        <>
            <div
                className={`fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={toggle}
            />
            <aside
                className={`
            fixed top-0 left-0 z-50 h-full w-64  bg-white transition-transform duration-300
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            lg:static lg:translate-x-0 lg:block p-3 
            `}
            >
                <img className='w-[140px] h-[50px] mb-4' src='../image/logo.png' alt="" />

                <List sx={{
                    transition: '0.4s',
                    width: '100%',
                    '*': { color: '#374151' },
                }}>
                    <ListItem>
                        <ListItemText primary='Dashboard' />
                    </ListItem>

                    {DashboardList && DashboardList.map((val, i) => {
                        const isSelected = pathname === val.href

                        return (
                            <ListItem key={i} sx={{ width: '100%' }}>
                                <ListItemButton component="a" href={val.href}

                                    sx={{
                                        backgroundColor: isSelected && '#EDE7F5',
                                        borderRadius: 1,
                                        '&:hover': {
                                            backgroundColor: '#EDE7F5'
                                        }
                                    }}
                                >
                                    <ListItemIcon>
                                        {val.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={<Typography sx={{
                                        color: isSelected ? '#643CB3' : '#374756',
                                        fontWeight: isSelected ? 500 : 400
                                    }}>
                                        {val.title}
                                    </Typography>} />
                                </ListItemButton>
                            </ListItem>

                        )
                    })}
                    
                    <ListItem sx={{borderTop:'1px solid #E3E8EF'}}>
                        <ListItemButton component="a" href={'./../'}

                            sx={{
                                borderRadius: 1,
                                '&:hover': {
                                    backgroundColor: '#EDE7F5'
                                }
                            }}
                        >
                            <ListItemIcon>
                                <PersonIcon/>
                            </ListItemIcon>
                            <ListItemText primary={<Typography sx={{
                                color: '#374756',
                                fontWeight: 400 
                            }}>
                                Login
                            </Typography>} />
                        </ListItemButton>
                    </ListItem>

                </List>

            </aside>
        </>
    );
}