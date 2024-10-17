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
import { useTranslation } from 'react-i18next';
import i18n from '../lang'; 

const Navbar = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const { t } = useTranslation(); 
    const imageName = 'logo.png';
    const logoPath = `${process.env.PUBLIC_URL}/${imageName}`;

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); 
    };

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
                        src={logoPath}
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
                                <Typography sx={{ textAlign: 'center' }}><Link to={`/`}>{t('Home')}</Link></Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography sx={{ textAlign: 'center' }}> <Link to={`/about`}>{t('About')}</Link></Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography sx={{ textAlign: 'center' }}> <Link to={`/project`}>{t('Projects')}</Link></Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography sx={{ textAlign: 'center' }}> <Link to={`/resume`}>{t('Resume')}</Link></Typography>
                            </MenuItem>
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
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                          <Avatar
                        alt="profilepic"
                        src={logoPath}
                        sx={{ width: 70, height: 70, margin:'10px', display: { xs: 'flex', md: 'none', lg:'none', xl:'none' } }}
                    />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link to={`/`}>{t('Home')}</Link>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link to={`/about`}>{t('About')}</Link>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link to={`/project`}>{t('Project')}</Link>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link to={`/resume`}>{t('Resume')}</Link>
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
                    <Box display="flex" justifyContent="flex-end" p={2}>
                        <IconButton onClick={() => changeLanguage('tr')} sx={{ fontSize:'13px'}} >TR
                        </IconButton>
                        <IconButton onClick={() => changeLanguage('en')} sx={{ fontSize:'13px'}}>EN
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;