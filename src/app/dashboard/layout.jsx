'use client'

import { useState } from 'react';
import Sidebar from '../components/templates/sidebar';
import Header from '../components/templates/navBar';
import { ThemeProvider } from '@mui/material';
import theme from '../theme/theme';

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <ThemeProvider theme={theme}>
      <Sidebar isOpen={sidebarOpen} toggle={toggleSidebar} />

      <div className="flex flex-col flex-1 w-0">
        <Header toggleSidebar={() => toggleSidebar()} />

        <main className="flex-1 overflow-y-auto py-8 px-12 bg-[#EEF2F6] rounded-bl-2xl rounded-tl-2xl">
          {children}
        </main>
      </div>
      </ThemeProvider>
    </div>
  );

}
