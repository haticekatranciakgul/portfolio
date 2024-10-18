import '../../src/App.css';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Divider from '@mui/material/Divider';
import Experience from '../components/Experience';
import { faReact, faCss3Alt, faHtml5, faJs, faBootstrap, faNpm, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next'; 


function About() {
  const { t } = useTranslation(); 

  return (
    <Box sx={{ flexGrow: 1, paddingTop: '1%' }}>
      <Grid container spacing={2} sx={{ textAlign: 'start' }}>
        <Grid size={{ xs: 12, sm: 4, md: 4 }}>
          <Typography variant='h5'>{t('Summary')}</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 8, md: 8 }} >
          <Typography variant='h5' sx={{paddingBottom: 2}}>{t('I can effectively use HTML, CSS, JavaScript, Bootstrap, React.js, React Hooks, Redux, and MUI technologies.I have knowledge of GitHub, Docker, and Kubernetes. I can integrate APIs and manage data.I am proficient in Photoshop.I have knowledge of Agile and Scrum methodologies. My aim is to provide creative and effective solutions by actively participating in every stage of software development.I am team-oriented, responsible, and open to growth.')}
          </Typography>
          <Divider />
        </Grid>
        <Grid size={{ xs: 12, sm: 4, md: 4 }}>
          <Typography variant='h5'>{t('Skill')}</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 8, md: 8 }}>
          <Typography variant='h6'>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, paddingBottom: 2 }}>
              <FontAwesomeIcon icon={faHtml5} size="2xl" />
              <FontAwesomeIcon icon={faReact} size="2xl" />
              <FontAwesomeIcon icon={faCss3Alt} size="2xl" />
              <FontAwesomeIcon icon={faJs} size="2xl" />
              <FontAwesomeIcon icon={faBootstrap} size="2xl" />
              <FontAwesomeIcon icon={faNpm} size="2xl" />
              <FontAwesomeIcon icon={faVuejs} size="2xl" />
             
              <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M16.634 16.504c.87-.075 1.543-.84 1.5-1.754c-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 0 0-1.648 1.769c.03.479.226.869.494 1.153c-1.048 2.038-2.621 3.536-5.005 4.795c-1.603.838-3.296 1.154-4.944.93c-1.378-.195-2.456-.81-3.116-1.799c-.988-1.499-1.078-3.116-.255-4.734c.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 0 1-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456c.6 0 1.23-.044 1.843-.194c3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753c.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 0 0 1.499-1.049h.555c2.309 0 4.495.674 6.488 1.992c1.527 1.005 2.622 2.323 3.237 3.897c.538 1.288.509 2.547-.045 3.597c-.855 1.647-2.294 2.517-4.196 2.517c-1.199 0-2.367-.375-2.967-.644c-.36.298-.96.793-1.394 1.093c1.318.598 2.652.943 3.94.943c2.922 0 5.094-1.647 5.919-3.236c.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 0 0 1.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029c-1.243-2.098-1.768-4.347-1.572-6.772c.12-1.828.72-3.417 1.797-4.735c.9-1.124 2.593-1.68 3.747-1.708c3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62C9.02.62 6.49 2.613 5.47 5.535C4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868"></path>
              </svg>
            </Box>


          </Typography>
          <Divider/>
        </Grid>
        <Grid size={{ xs: 12, sm: 4, md: 4 }}>
          <Typography variant='h5'>{t('Experience')}</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 8, md: 8 }}>
          <Typography variant='h6'>
            <Experience></Experience>
            <Divider/>
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 4, md: 4 }}>
          <Typography variant='h5'>{t('Education')}</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 8, md: 8 }}>
          <Typography variant='h6'>{t('Istanbul Yeni Yuzyil Universty')}İstanbul Yeni Yüzyıl Üniversitesi</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About
