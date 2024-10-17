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
import { useSelector } from 'react-redux';
import { selectProjects } from '../redux/projectSlice';
import { useTranslation } from 'react-i18next';


function ProjectCard() {
    const { t } = useTranslation(); 

    const projects = useSelector(selectProjects);
    return (
        <>
            {projects.map((project) => (
                <Card key={project.id} sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                            <Avatar
                                alt="profilepic"
                                src={project.avatar}
                                sx={{ width: 30, height: 30 }}
                            />
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                       title={t(project.title)} 
                        subheader={project.date}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={project.image}
                        alt={t(project.title)}
                    />
                    <CardContent>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {t(project.description)}
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
            ))}
        </>
    )
}

export default ProjectCard
