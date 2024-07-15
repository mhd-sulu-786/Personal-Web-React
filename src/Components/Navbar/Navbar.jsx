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
import { Col } from 'react-bootstrap';

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
  const theme = 'default'; // Change theme dynamically based on your logic

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Function to get active page based on window location or state

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'transparent', width: '100%', boxShadow: 'none' }} className="d-flex justify-content-center align-items-center">
      <Col 
        className="col-12 col-md-6 p-2 mb-2"
        style={{
          borderRadius: '0px 0px 10px 10px',
          color: '#9C9C9C',
          borderBottom: '1px solid',
          backgroundColor: '#1B1B1B', // Default background color
        }}
        xs={{
          border: 'none',
          borderBottom: '1px solid',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
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
                sx={{ display: { xs: 'block', md: 'none' } }}
                className="d-flex justify-content-center align-items-center"
              >
                <div className="boxs m-1">
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={() => { handleCloseNavMenu(); window.location.href = '#' + page; }}>
                      <Typography textAlign="center" style={{ color: '#9C9C9C' }}>{page}</Typography>
                    </MenuItem>
                  ))}
                </div>
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  href={'#' + page}
                  onClick={handleCloseNavMenu}
                  className="hovers"
                  sx={{ my: 2, color: colorThemes[theme].textColor, display: 'block', backgroundColor: page === 'HOME' ? 'black' : 'transparent' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="it's mhd_sulu_786">
                <Avatar alt="sululogo" className="logo-img" src="https://avatars.githubusercontent.com/u/144138399?v=4" />
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
        {/* Theme selector */}
        
      </Col>
    </AppBar>
  );
}

export default ResponsiveAppBar;
