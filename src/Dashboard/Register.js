import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, userRef } from '../firebase';
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Box,
    Grid,
    Typography,
    createTheme,
    ThemeProvider,
    Container,
} from "../Material  UI/Material";

const theme = createTheme();

const Register = () => {
    const navigate = useNavigate();

    console.log(auth.currentUser);
    if (auth?.currentUser?.emailVerified) {
        console.log(auth.currentUser);
        navigate('/dashboard')
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        // eslint-disable-next-line no-console
        userRef.add({
            email: data.get('email'),
            phone: +data.get('phone'),
            name: data.get('firstName') + ' ' + data.get('lastName'),
            id: ''
        });
        navigate('/dashboard')

    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Register
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="phone"
                                    label="Phone Number"
                                    type="number"
                                    id="number"
                                    autoComplete="number"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Register;
