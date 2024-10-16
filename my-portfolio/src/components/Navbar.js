import React from "react";
import { useContext } from "react";
import { ColorModeContext } from "../theme";
import { useTheme, Box, IconButton, Typography } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';


const Navbar = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
 
    const handleClick = (e) => {
        e.preventDefault();
        colorMode.toggleColorMode(); 
        console.log("toggleColorMode tıklandı")
    }

    return (
        <AppBar position="static" >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                         <Avatar
                        alt="profilepic"
                        src="/favicon.ico"
                        sx={{ width: 90, height: 90, margin:'10px', display: { xs: 'none', md: 'flex', lg:'flex', xl:'flex' } }}
                    />
                       
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
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography sx={{ textAlign: 'center' }}><Link to={`/`}>Home</Link></Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography sx={{ textAlign: 'center' }}> <Link to={`/about`}>About</Link></Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography sx={{ textAlign: 'center' }}> <Link to={`/project`}>Project</Link></Typography>
                            </MenuItem>

                        </Menu>
                    </Box>
                   {/* // <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}

                  
                    {/* <img
                            component="img"
                            height="auto"
                            src='./favicon.ico'
                            alt='logo' width={'30px'}
                            sx={{ borderRadius: '10px', display: { xs: 'flex', md: 'none', lg:'none', xl:'none' } }}
                        /> */}
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
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                          <Avatar
                        alt="profilepic"
                        src="/favicon.ico"
                        sx={{ width: 100, height: 100, margin:'15px', display: { xs: 'flex', md: 'none', lg:'none', xl:'none' } }}
                    />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link to={`/`}>Home</Link>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link to={`/about`}>About</Link>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link to={`/project`}>Project</Link>
                        </Button>

                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton onClick={handleClick}>
                            {theme.palette.mode === "dark" ? (

                                <LightModeOutlinedIcon />
                            ) : (
                                <DarkModeOutlinedIcon />
                            )}
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;