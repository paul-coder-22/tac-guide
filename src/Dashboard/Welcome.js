import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

import {
    Button, Box,
    Typography, CardContent, CardActions, Card, CardMedia, Grid
} from "../Material  UI/Material";


import Navbar from './Navbar';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const card = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
                be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
            </Typography>
            <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </React.Fragment>
);



const Welcome = () => {
    const logout = () => {
        auth.signOut();
    }
    return (
        <div>
            <Navbar>
                <h1>Welcome</h1>
            </Navbar>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>

                    <Grid item lg={3} xs={6} sm={4} md={4}>
                        <Card sx={{ maxWidth: 305, maxHeight: 450, mt: 1 }} >
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="300"
                                image="http://placecorgi.com/300/300"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item lg={3} xs={6} sm={4} md={4}>
                        <Card sx={{ maxWidth: 305, maxHeight: 450, mt: 1 }} >
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="300"
                                image="http://placecorgi.com/300/300"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item lg={3} xs={6} sm={4} md={4}>
                        <Card sx={{ maxWidth: 305, maxHeight: 450, mt: 1 }} >
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="300"
                                image="http://placecorgi.com/300/300"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item lg={3} xs={6} sm={4} md={4}>
                        <Card sx={{ maxWidth: 305, maxHeight: 450, mt: 1 }} >
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="300"
                                image="http://placecorgi.com/300/300"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            {/*             <Link to={'/'}>
                <button style={{ "marginLeft": "20px" }}
                    onClick={logout}>
                    Logout
                </button>
            </Link> */}
        </div>
    );
};

export default Welcome;