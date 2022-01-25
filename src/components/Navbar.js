import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

import Logo from './images/favicon.png';

const pages = [
  ['About Me', '#aboutMe'],
  ['Portfolio', '#myWorks'],
  ['Articles', '#articles'],
  ['Contact Info', '#hireMe'],
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }} component='nav'>
      <AppBar
        position='static'
        sx={{ backgroundColor: '#ffffff', boxShadow: 'none' }}
      >
        <Toolbar disableGutters>
          <Link href='/' sx={{ color: '#212121', flexGrow: 1 }}>
            <Box
              component='img'
              src={Logo}
              alt='my logo'
              sx={{ height: { md: '80px' }, width: { md: '100px' } }}
            />
          </Link>
          <Box sx={{ display: { xs: 'flex' } }}>
            <IconButton
              size='large'
              edge='start'
              aria-label='account of current user'
              onClick={handleOpenNavMenu}
              aria-controls='menu-appbar'
            >
              <MenuIcon sx={{ color: '#212121', fontSize: { md: '48px' } }} />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                fontFamily: 'Product Sans',
                fontStyle: 'normal',
                display: { xs: 'block' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    href={page[1]}
                    sx={{ textDecoration: 'none', color: '#212121' }}
                  >
                    <Typography
                      sx={{ textDecoration: 'none' }}
                      textAlign='center'
                    >
                      {page[0]}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
