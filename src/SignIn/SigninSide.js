import * as React from 'react';
import {
    Avatar, Button,
    CssBaseline, TextField,
    FormControlLabel, Checkbox,
    Paper, Box, Grid,
    Typography, createTheme, ThemeProvider
} from "../Material  UI/Material";
import { auth, login, provider } from '../firebase';


import { Link } from 'react-router-dom';


const theme = createTheme();

export default function SignInSide() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        let form = {
            email: data.get('email'),
            password: data.get('password'),
        }
        await login(form)
    };

    const signinWithGoogle = () => {
        auth.signInWithPopup(provider).catch(alert)
        console.log(auth.currentUser);
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            {/* <LockOutlinedIcon /> */}
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{ mt: 0, mb: 2 }}
                                onClick={signinWithGoogle}
                            >
                                Sign In Google
                            </Button>

                            <Grid container>
                                <Grid item xs>
                                    {/* <Link href="#" variant="body2" >
                                        Forgot password?
                                    </Link> */}
                                </Grid>
                                <Grid item>
                                    <Link to={'/signup'} >
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}