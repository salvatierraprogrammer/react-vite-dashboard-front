import React from 'react';
import { Box, Typography } from '@mui/material';

function Profile() {
  return (
    <Box p={3}>
      <Typography variant="h4">Perfil del Usuario</Typography>
      <Typography variant="body1">Aquí puedes actualizar tu perfil.</Typography>
    </Box>
  );
}

export default Profile;