import * as React from 'react';
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
import { useNavigate } from "react-router-dom";


const Header = () => {

  let navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Inatel APP Challenge 2022
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
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
                <MenuItem  onClick={()=>{handleCloseNavMenu();navigate('/')}} >
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
                <MenuItem  onClick={()=>{handleCloseNavMenu();navigate('/installers')}} >
                  <Typography textAlign="center">Installers</Typography>
                </MenuItem>
                <MenuItem  onClick={()=>{handleCloseNavMenu();navigate('/plans')}} >
                  <Typography textAlign="center">Plans</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 0,
              fontFamily: 'monospace',
              fontWeight: 700,
              fontSize: "20px",
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Inatel APP Challenge
          </Typography>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>          
              <Button
                onClick={()=>{handleCloseNavMenu();navigate('/')}}
                sx={{ my: 2, color: 'white', display: 'block',fontSize:'16px'}}
              >
                Home
              </Button>
              <Button
                onClick={()=>{handleCloseNavMenu();navigate('/installers')}}
                sx={{ my: 2, color: 'white', display: 'block',fontSize:'16px'}}
              >
                Installers
              </Button>
              <Button
                onClick={()=>{handleCloseNavMenu();navigate('/plans')}}
                sx={{ my: 2, color: 'white', display: 'block',fontSize:'16px' }}
              >
                Plans
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;