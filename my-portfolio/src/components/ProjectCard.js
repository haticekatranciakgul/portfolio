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

function ProjectCard() {
    return (
        <>
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
                    <GitHubIcon />
                </IconButton>

            </CardActions>

        </Card>
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
                    <GitHubIcon />
                </IconButton>

            </CardActions>

        </Card>
        
        
        
        </>
       
        
    )
}

export default ProjectCard
