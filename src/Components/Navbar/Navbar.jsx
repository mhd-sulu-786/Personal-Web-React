import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = ['HOME', 'ABOUT', 'RESUME', 'WORKS', 'CONTACT'];

const colorThemes = {
  default: {
    backgroundColor: 'black',
    textColor: 'inherit',
  },
  light: {
    backgroundColor: 'white',
    textColor: 'black',
  },
  blue: {
    backgroundColor: 'blue',
    textColor: 'white',
  },
  green: {
    backgroundColor: 'green',
    textColor: 'white',
  },
};

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [theme, setTheme] = React.useState('default');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    handleCloseNavMenu();
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: colorThemes[theme].backgroundColor, width: '100%', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 3,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'sans-serif',
              fontWeight: 800,
              letterSpacing: '.3.4rem',
              color: colorThemes[theme].textColor,
              textDecoration: 'none',
              backgroundColor: 'transparent'
            }}
            className='hover-logo'
          >
            SULU
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
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
              <div className='boxs m-1'>
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => { handleCloseNavMenu(); window.location.href = '#' + page; }}>
                    <Typography textAlign="center" className='text-white'>{page}</Typography>
                  </MenuItem>
                ))}
              </div>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: colorThemes[theme].textColor,
              textDecoration: 'none',
            }}
          >
            SULU
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                href={'#' + page}
                onClick={handleCloseNavMenu}
                className='hovers'
                sx={{ my: 2, color: colorThemes[theme].textColor, display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="it's mhd_sulu_786" >
              <Avatar alt="sululogo" className='logo-img' src="https://avatars.githubusercontent.com/u/144138399?v=4" />
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
      {/* Theme selector */}
      <Box sx={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 999 }}>
        {Object.keys(colorThemes).map((key) => (
          <Button
            key={key}
            variant="contained"
            sx={{ mx: 1, backgroundColor: colorThemes[key].backgroundColor, color: colorThemes[key].textColor }}
            onClick={() => handleThemeChange(key)}
          >
            {key.toUpperCase()}
          </Button>
        ))}
      </Box>
    </AppBar>
  )}
  export default ResponsiveAppBar;
