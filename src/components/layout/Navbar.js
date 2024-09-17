import { useState } from 'react';

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

const iconButtonStyles = () => {
  return {
    mr: 2,
  };
};

const listBoxStyles = () => {
  return {
    flexGrow: 1,
    justifyContent: 'flex-end',
    display: 'flex',
    flexDirection: 'row',
  };
};
const listStyles = () => {
  return {
    display: 'flex',
    flexDirection: 'row',
  };
};
const listButtonStyles = () => {
  return {
    textAlign: 'center',
  };
};

const NavBar = () => {
  const [navButtons] = useState([
    { title: 'About', href: '/about' },
    { title: 'Single', href: '/single' },
    { title: 'Auto', href: '/auto' },
  ]);

  return (
    <Box data-testid="navbar-container" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={iconButtonStyles}
            href="/"
          >
            <Typography>Skyscraper Lifts</Typography>
          </IconButton>
          <Box component="div" sx={listBoxStyles}>
            <List sx={listStyles}>
              {navButtons.map((item) => (
                <ListItem key={item.title} disablePadding>
                  <ListItemButton sx={listButtonStyles} href={item.href}>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
