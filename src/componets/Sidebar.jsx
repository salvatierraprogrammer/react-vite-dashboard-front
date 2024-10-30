import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material';
import { Home, Person, Settings } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const Sidebar = ({ isOpen, toggleDrawer }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Drawer
      variant={isSmallScreen ? 'temporary' : 'permanent'}
      open={isSmallScreen ? isOpen : true}
      onClose={toggleDrawer}
      sx={{
        width: isOpen ? 240 : 70,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: isOpen ? 240 : 70,
          boxSizing: 'border-box',
          transition: 'width 0.3s',
        },
      }}
    >
      <List sx={{ marginTop: 8 }}>
        <ListItem button component={Link} to="/" onClick={isSmallScreen ? toggleDrawer : null}>
          <ListItemIcon><Home /></ListItemIcon>
          {isOpen && <ListItemText primary="Dashboard" />}
        </ListItem>
        <ListItem button component={Link} to="/profile" onClick={isSmallScreen ? toggleDrawer : null}>
          <ListItemIcon><Person /></ListItemIcon>
          {isOpen && <ListItemText primary="Perfil" />}
        </ListItem>
        <ListItem button component={Link} to="/settings" onClick={isSmallScreen ? toggleDrawer : null}>
          <ListItemIcon><Settings /></ListItemIcon>
          {isOpen && <ListItemText primary="Configuración" />}
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;