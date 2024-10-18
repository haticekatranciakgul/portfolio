import '../../src/App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import * as React from 'react';
import ProjectCard from '../components/ProjectCard';

function Project() {
  return (
    <Box sx={{ flexGrow: 1, paddingTop: '5%' }}>
      <Grid container spacing={2}>
        <ProjectCard/>
      </Grid>
    </Box>
  )
}

export default Project
