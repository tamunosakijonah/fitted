// npm install @mui/material @emotion/react @emotion/styled
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import shape from './images/Shape.png'
import squircle from './images/squircle.png'
import vector from './images/vector.png'
import logo from './images/logo.png'

const drawerWidth = 240;

function Sidebar(){
    const navigate = useNavigate();
    const location = useLocation();
    const items = [
        {
          list: 'measurement',
          icon: shape,
          path: '/dashboard',
        },
        {
          list: 'orders',
          icon: squircle,
          path: '/loans',
        },
        {
          list: 'product',
          icon: vector,
          path: '/profile',
        },
        {
          list: 'customers',
          icon: GroupIcon,
          path: '/messages',
        },
        {
          list: 'myProfile',
          icon: PersonIcon,
          path: '/notification',
        },
        {
          list: 'logout',
          icon: LogoutIcon,
          path: '/reports',
        },
        
      ];
    
    
    
    return(
        <div>
            <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* <Navbar /> */}
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          bgcolor: 'white',
          boxShadow: 'none',
          color: 'black',
        }}
      >
        {/* <Toolbar>
          <div className="navbar">
            <MessageDialog />
            <NotificationDialog />
            <UserDialog />
          </div>
        </Toolbar> */}
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            overflow: 'hidden',
            border: 'none',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <img src={logo} alt="Loanify Logo" className="sidebar-logo" />
        </Toolbar>
        <List
          sx={{ backgroundColor: '#04297F', color: 'white', height: '75%' }}
        >
          {items.map((text, index) => {
            const isActive = location.pathname.startsWith(text.path);
            return (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  onClick={() => navigate(text.path)}
                  sx={
                    isActive
                      ? { backgroundColor: 'rgba(255, 255, 255, 0.3)' }
                      : {}
                  }
                >
                  <img
                    src={text.icon}
                    alt="Icon"
                    style={{
                      paddingLeft: '20px',
                    }}
                  />
                  <ListItemText
                    primary={text.list}
                    style={{
                      paddingLeft: '20px',
                      paddingRight: '10px',
                      marginTop: '5px',
                      fontSize: '16px',
                      fontWeight: '400',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <List sx={{ backgroundColor: '#04297F', color: 'white' }}>
          {['Support'].map((text, index) => {
            const isActive = location.pathname.startsWith('/support');
            return (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  onClick={() => navigate('/support')}
                  sx={
                    isActive
                      ? { backgroundColor: 'rgba(255, 255, 255, 0.3)' }
                      : {}
                  }
                >
                  <img
                    src={support}
                    alt=""
                    style={{
                      paddingLeft: '20px',
                    }}
                  />
                  <ListItemText
                    primary={text}
                    style={{
                      paddingLeft: '20px',
                      paddingRight: '10px',
                      fontSize: '16px',
                      fontWeight: '400',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Box>
        </div>
    )
}
export default Sidebar