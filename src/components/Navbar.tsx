import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { List, ListItem, ListItemText, AppBar, Toolbar, Typography, IconButton, Button, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GTranslateIcon from '@mui/icons-material/GTranslate';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background :  '#000',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
  navLinks : {
    display : 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display : 'flex',
    flexGrow: 1,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

const drawerWidth = 240;

const Navbar = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'Category',
      link: '/category',
    },
    {
      text: 'Content',
      link: '/content',
    },
    {
      text: 'Contact',
      link: '/contact',
    },
    {
      text: 'About',
      link: '/about',
    },
    {
        text: 'Sign In',
        link: '/signin',
    },
  ];

  const drawerList = (
    <div>
      <div className={classes.toolbar} />
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text} component="a" href={item.link}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position='relative' className={classes.appBar}>
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
            Navbar
          </Typography>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            className={classes.menuButton}
          >
            <MenuIcon sx={{display:{md:'none',xs:'flex'}}}/>
          </IconButton>

          <div className={classes.navLinks}>
            {menuItems.map((item) => (
              <Button key={item.text} color="inherit" component="a" href={item.link}>
                {item.text}
              </Button>
            ))}
          </div>
          <IconButton size='large' edge='start' color='inherit'>
                <GTranslateIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Drawer
          variant="temporary"
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {drawerList}
        </Drawer>
      </nav>
    </div>
  );
};

export default Navbar;