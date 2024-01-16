import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import React, { useState, MouseEvent } from "react";
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import MenuIcon from '@mui/icons-material/Menu';
import GTranslateIcon from '@mui/icons-material/GTranslate';

const Navbar = () => {
    const pages = ['Home', 'Content', 'Discussion Forum', 'Category', 'Content Providers', 'Career Expert', 'Contact Us', 'About Us', 'Sign in']
    const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);

    function openMenu(event: MouseEvent<HTMLElement>) {
        setAnchorNav(event.currentTarget);
    }

    const closeMenu = () => {
        setAnchorNav(null);
    };
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='medium' edge='start' color='inherit' aria-label='logo' sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <LocalLibraryIcon />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>Nav Bar</Typography>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }} >
                    {pages.map((page) => (
                        <Button color='inherit'>{page}</Button>
                    ))}
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton size='medium' edge='start' color='inherit' onClick={openMenu} >
                        <MenuIcon />
                    </IconButton>
                    <Menu open={Boolean(anchorNav)} onClose={closeMenu} sx={{ display: { xs: 'flex', md: 'none' }}}>
                        {pages.map((page) => (
                            <MenuItem key={page} sx={{textTransform:'capitalize', padding:'0px 15px'}}>
                                {/* <Typography variant="inherit" component="span" sx={{ textTransform: 'capitalize', padding:'0px 10px' }}> */}
                                    {page}
                                {/* </Typography> */}
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <LocalLibraryIcon />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>Nav Bar</Typography>
                <IconButton size='large' edge='start' color='inherit'>
                    <GTranslateIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;