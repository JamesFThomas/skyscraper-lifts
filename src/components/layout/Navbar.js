import { useState } from "react";

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
} from "@mui/material";

const NavBar = () => {
  const [navButtons] = useState([
    { title: "About", href: "/about" },
    { title: "Single", href: "/single" },
    { title: "Auto", href: "/auto" },
  ]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            href="/"
          >
            <Typography>Skyscraper Lifts</Typography>
          </IconButton>
          <Box
            component="div"
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <List sx={{ display: "flex", flexDirection: "row" }}>
              {navButtons.map((item) => (
                <ListItem key={item.title} disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }} href={item.href}>
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
