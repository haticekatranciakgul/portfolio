import '../../src/App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
// import ProjectCard from '../components/ProjectCard';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GitHubIcon from '@mui/icons-material/GitHub';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from "react-router-dom";


function Project() {
  return (
    <Box sx={{ flexGrow: 1, paddingTop: '5%' }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 4 }}>
          {/* <ProjectCard/> */}
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar alt="profilepic"
                  src="./rickmortyicon.png"
                  sx={{ width: 30, height: 30 }}>

                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Rick and Morty App"
              subheader="08.2024"
            />
            <CardMedia
              component="img"
              height="194"
              image="./rickandmorty.png"
              alt="Rick and Morty"
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                React Redux MUI
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <Link to={'https://haticekatranciakgul.github.io/react-redux-rick-morty-app/'}>
                  <GitHubIcon />

                </Link>

              </IconButton>

            </CardActions>

          </Card>


        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar alt="profilepic"
                  src="./redux.png"
                  sx={{ width: 30, height: 30 }}>

                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Redux Notes App"
              subheader="07.2024"
            />
            <CardMedia
              component="img"
              height="194"
              image="./notesapp.png"
              alt="Rick and Morty"
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                React Redux 
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <Link to={'https://haticekatranciakgul.github.io/reduxnoteapp/'}>
                  <GitHubIcon />
                </Link>
              </IconButton>
            </CardActions>

          </Card>


        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar alt="profilepic"
                  src="./billgates.jpg"
                  sx={{ width: 30, height: 30 }}>

                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Bill Gate's Spend Money"
              subheader="10.2024"
            />
            <CardMedia
              component="img"
              height="194"
              image="./billgates.png"
              alt="Rick and Morty"
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                React Redux MUI
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <Link to={'https://haticekatranciakgul.github.io/react-redux-spend-money/'}>
                  <GitHubIcon />
                </Link>
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar alt="profilepic"
                  src="./weathericon.png"
                  sx={{ width: 30, height: 30 }}>

                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="React Weather App"
              subheader="04.2024"
            />
            <CardMedia
              component="img"
              height="194"
              image="./weatherapp.png"
              alt="Rick and Morty"
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                React 
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <Link to={'https://haticekatranciakgul.github.io/react-weather-app/'}>
                  <GitHubIcon />
                </Link>
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Project
