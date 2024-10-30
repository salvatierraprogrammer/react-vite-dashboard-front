import React from 'react';
import { Box, Typography } from '@mui/material';

function DashboardHome() {
  return (
    <Box p={3}>
      <Typography variant="h4">Bienvenido al Dashboard</Typography>
      <Typography variant="body1">Este es el resumen de tus actividades.</Typography>
    </Box>
  );
}

export default DashboardHome;