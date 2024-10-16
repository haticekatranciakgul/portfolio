import '../../src/App.css';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Avatar from '@mui/material/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


function HomeDetail() {
    return (
        <Box sx={{ flexGrow: 1, paddingTop: '20%' }}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 4 }}
                sx={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}
                >
                    <Avatar
                        alt="profilepic"
                        src="./pic.jpeg"
                        sx={{ width: 300, height: 300 }}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                    <Typography sx={{ fontSize: '40px' }}>HATİCE AKGUL KATRANCI</Typography>
                    <Typography sx={{ fontSize: '35px' }}>FRONT-END DEVELOPER</Typography>
                    

                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                        <Link to={'https://github.com/haticekatranciakgul'}>
                            <FontAwesomeIcon icon={faGithub} size="2xl" />
                        </Link>
                        <Link to={'mailto:katrancihatice@icloud.com'}>
                            <FontAwesomeIcon icon={faEnvelope} size="2xl" />
                        </Link>
                        <Link to={'https://www.linkedin.com/in/haticekatranci/'}>
                            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                        </Link>
                        <Link to={'https://www.instagram.com/k.h.akgul'}>
                            <FontAwesomeIcon icon={faInstagram} size="2xl" />
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default HomeDetail
