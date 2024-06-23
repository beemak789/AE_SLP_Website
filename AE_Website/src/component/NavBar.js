import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-scroll';
import { links } from '../utils/links';
import { Icon } from '@iconify/react';
// import { Link} from 'react-router-dom';

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar
      position='static'
      className='nav-bar-container'
    >
      <Container maxWidth='xl'>
        <Toolbar
          disableGutters
          sx={{
            width: '100%',
            mx: 'auto',
          }}
        >
          <img
            className='nav-leaf-icon'
            src='/logo.jpg'
            alt='leafIcon logo'
            width={50}
            height={50}
          ></img>
          <Typography
          className='nav-logo-text'
            // variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            Full Bloom Speech
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
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
                display: { xs: 'block', md: 'none' },
              }}
            >
              {links.map((link, idx) => (
                <MenuItem key={idx} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>
                    <Link spy={true} smooth={true} duration={500} to={link.to}>
                      {link.name}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
          className='hidden-nav-logo-text'
            variant='h5'
            noWrap
            component='a'
            href=''
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
            }}
          >
            Speak Easy with Brandy
          </Typography>
          <Box
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
            className='nav-links-container'
          >
            {links.map((link, idx) => (
              <Button
                key={idx}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'black',
                  display: 'block',
                }}
              >
                <Link
                  className='links-text'
                  spy={true}
                  smooth={true}
                  duration={500}
                  to={link.to}
                >
                  {link.name}
                </Link>
              </Button>
            ))}
            <a href="https://instagram.com/speakeasywithbrandy?igshid=MzNlNGNkZWQ4Mg==">
            <Icon icon='skill-icons:instagram' className='instagram-navbar'/>
            </a>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
