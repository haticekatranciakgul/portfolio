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
import { useSelector, useDispatch } from 'react-redux';
import { selectProjects, incrementFavoriteCount } from '../redux/projectSlice';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import Grid from '@mui/material/Grid2';

function ProjectCard() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const projects = useSelector(selectProjects);

    const sendEmail = (projectTitle) => {
        emailjs.send('service_8ihennh', 'template_0gylyjr', {
            message: `Favorite button has been clicked for ${projectTitle} project!`,
        }, 'wP4HyAXYbimySOdV1')
            .then((response) => {
                console.log('Email sent successfully:', response.status, response.text);
            }, (err) => {
                console.error('Failed to send email:', err);
            });
    };

    const handleFavoriteClick = (project) => {
        dispatch(incrementFavoriteCount(project.id));
        sendEmail(project.title);
    };
    if (!projects || projects.length === 0) {
        return <div>No projects available</div>;
    }

    return (
        <>
            {projects.map((project) => (
                <Grid size={4} marginBottom={5}>
                    <Card key={project.id} >
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
                            <IconButton aria-label="add to favorites" onClick={() => handleFavoriteClick(project)}>
                                <FavoriteIcon />
                                {project.favoriteCount > 0 && <span>{project.favoriteCount}</span>}
                            </IconButton>
                            <IconButton aria-label="share"
                                onClick={() => window.open(project.url, '_blank')}>
                                <GitHubIcon />
                            </IconButton>
                        </CardActions>
                    </Card>

                </Grid>

            ))}
        </>
    );
}

export default ProjectCard;
