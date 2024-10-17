import '../../src/App.css';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Avatar from '@mui/material/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const textVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } },
};

const iconVariants = {
    hidden: { opacity: 0, y: -200, rotate: -180 },
    visible: {
        opacity: 1,
        y: 0,
        rotate: 0,
        transition: {
            duration: 3,
            ease: 'easeOut',
            type: 'spring',
            stiffness: 300,
            damping: 10,
        },
    },
};
function HomeDetail() {
    const theme = useTheme();
    const isLightMode = theme.palette.mode === 'light';
    const { t } = useTranslation();

    const imageName = 'pic.jpeg';
    const logoPath = `${process.env.PUBLIC_URL}/${imageName}`;

    return (
        <Box sx={{ flexGrow: 1, marginTop: '15%' }} className="bgImg" >
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Avatar
                        alt="profilepic"
                        src={logoPath}
                        sx={{ width: 400, height: 400 }}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                }}>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                    >
                        <Typography sx={{ fontSize: '40px', margin: '10px' }}>
                            HATİCE AKGUL KATRANCI
                        </Typography>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        transition={{ delay: 0.2 }}
                    >
                        <Typography sx={{ fontSize: '35px', margin: '10px' }}>
                            {t('FRONT-END DEVELOPER')}
                        </Typography>
                    </motion.div>


                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, margin: '10%' }}>
                        <motion.div initial="hidden" animate="visible" variants={iconVariants}>
                            <Link to={'https://github.com/haticekatranciakgul'}>
                                <FontAwesomeIcon icon={faGithub} size="2xl" style={{ color: isLightMode ? "#000" : "#FFF" }}/>
                            </Link>
                        </motion.div>

                        <motion.div initial="hidden" animate="visible" variants={iconVariants} transition={{ delay: 0.1 }}>
                            <Link to={'mailto:katrancihatice@icloud.com'}>
                                <FontAwesomeIcon icon={faEnvelope} size="2xl" style={{ color: isLightMode ? "#000" : "#FFF" }}/>
                            </Link>
                        </motion.div>

                        <motion.div initial="hidden" animate="visible" variants={iconVariants} transition={{ delay: 0.2 }}>
                            <Link to={'https://www.linkedin.com/in/haticekatranci/'}>
                                <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{ color: isLightMode ? "#000" : "#FFF" }}/>
                            </Link>
                        </motion.div>

                        <motion.div initial="hidden" animate="visible" variants={iconVariants} transition={{ delay: 0.3 }}>
                            <Link to={'https://www.instagram.com/k.h.akgul'}>
                                <FontAwesomeIcon icon={faInstagram} size="2xl" style={{ color: isLightMode ? "#000" : "#FFF" }} />
                            </Link>
                        </motion.div>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default HomeDetail
