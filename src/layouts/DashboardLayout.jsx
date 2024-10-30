import React from 'react';
import { Box } from '@mui/material';
import Sidebar from '../componets/Sidebar';
import Header from '../componets/Header';

function DashboardLayout({ children }) {
  return (
    <Box display="flex">
      <Sidebar />
      <Box component="main" flexGrow={1}>
        <Header />
        {children}
      </Box>
    </Box>
  );
}

export default DashboardLayout;