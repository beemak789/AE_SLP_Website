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
import { createTheme } from '@mui/material';
// import { Link} from 'react-router-dom';
import styled from 'styled-components';

const theme = createTheme({
  typography: {
    fontFamily: 'Solway',
    fontWeightRegular: 100,
    fontSize: '10',
  },
});

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position='static' className='nav-bar-container'>
        <NavBarContainer>
        <ContactInfoContainer >
          <span>212-222-2222 </span>
          <span>test@email.com</span>
          <span></span>
        </ContactInfoContainer>
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
                width={380}
                height={200}
                style={{ marginLeft: '1rem' }}
              ></img>

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
                      <Typography>
                        <Link
                          spy={true}
                          smooth={true}
                          duration={500}
                          to={link.to}
                        >
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
              <Box className='nav-links-container'>
                {links.map((link, idx) => (
                  <Button key={idx} onClick={handleCloseNavMenu}>
                    <Link
                      className='links-text'
                      spy={true}
                      smooth={true}
                      duration={500}
                      to={link.to}
                      style={{
                        color: '#26453e',
                        fontFamily: 'Solway',
                        fontSize: '16px',
                      }}
                    >
                      {link.name}
                    </Link>
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </NavBarContainer>
      </AppBar>
    </>
  );
};
export default Navbar;
const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactInfoContainer = styled.div`
  background: #008080;
  width: 100%;
  height: 25px;
  span {
    color: white;
    padding: 0.5rem;
    font-size: 12px;
    margin-left: 2rem;
    font-weight: 100;
  }
`
