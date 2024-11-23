import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-scroll';
import { links } from '../utils/links';
import styled from 'styled-components';
import { Icon } from '@iconify/react';

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
      <NavBarContainer name="nav">
        <ContactInfoContainer>
          <div>
            <span>(937)-369-6613</span>
            <span>amye@fullbloomspeechlanguagepathology.com</span>
            <span></span>
          </div>

          <div className='facebook-insta-container'>
            <a href='https://www.instagram.com/fullbloomslp?igsh=cDNhNncydmVpejZr'>
              {' '}
              <Icon icon='skill-icons:instagram' />
            </a>
            <a href='https://www.facebook.com/profile.php?id=61560669335136'>
              {' '}
              <FacebookIcon
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 256 256'
              >
                <path
                  fill='#1877f2'
                  d='M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445'
                ></path>
                <path
                  fill='#fff'
                  d='m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z'
                ></path>
              </FacebookIcon>
            </a>
          </div>
        </ContactInfoContainer>

        <ToolbarContainer>
          <Link spy={true} smooth={true} duration={500} to='nav'>
            <LogoImg src='/logo.jpg' className='nav'></LogoImg>
          </Link>

          <StyledBox>
            <Hamburger
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
              alt='menu-icon-nav'
            >
              <MenuIcon className='menu-icon' />
            </Hamburger>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              disableScrollLock={false}
            >
              {links.map(
                (link, idx) =>
                  idx > 0 && (
                    <MenuItem
                      key={idx}
                      onClick={handleCloseNavMenu}
                      onBlur={handleCloseNavMenu}
                    >
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
                  )
              )}
            </Menu>
          </StyledBox>

          <NavLinksContainer className='nav-links-container'>
            {links.map((link, idx) => (
              <Button key={idx} onClick={handleCloseNavMenu}>
                <StyledLink
                  spy={true}
                  smooth={true}
                  duration={500}
                  to={link.to}
                >
                  {link.name}
                </StyledLink>
              </Button>
            ))}
          </NavLinksContainer>
        </ToolbarContainer>
      </NavBarContainer>
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
  height: 25px;
  display: flex;
  padding: 0.8rem;

  span {
    color: white;
    padding: 0.5rem;
    font-size: 15px;
    margin-left: 2rem;
    font-weight: 100;
  }

  .facebook-insta-container {
    display: flex;
    align-items: center;
    gap: 1em;
    margin-left: -2rem;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    display: none;
  }
`;

const LogoImg = styled.img`
  width: 280px;
  height: 200px;
  margin-left: 1.2rem;
  @media (min-width: 375px) and (max-width: 768px) {
    height: 220px;
    width: 300px;
  }
`;
const NavLinksContainer = styled(Box)`
  width: 100%;
  display: flex;
  font-size: 24px !important;
  color: black !important;
  justify-content: space-between;
  padding: 2rem;

  @media (min-width: 375px) and (max-width: 1042px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  color: #26453e;
  font-family: 'Solway';
  font-size: 16px;
`;

const FacebookIcon = styled.svg`
  height: 1.2em;
  width: 1.2em;
  margin-top: -0.2rem;
`;

const StyledBox = styled(Box)`
  margin-right: 1rem;
`;
const ToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-height: 350px;
`;

const Hamburger = styled(IconButton)`
  .menu-icon {
    font-size: 2rem;
  }
  @media (min-width: 1043px) {
    .menu-icon {
      display: none;
    }
  }
  @media (min-width: 650px) {
    .menu-icon {
      font-size: 3rem;
    }
  }
`;
