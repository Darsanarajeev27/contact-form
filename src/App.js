import React from 'react';
import './App.css';
import { Typography, Card, Grid, TextField, Button, CardContent } from '@mui/material';

function App() {
    return (
        <div className="App">
            <Typography gutterBottom variant="h3" align="center">
                Contact Me
            </Typography>

            <Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}>
                <CardContent>
                    <Typography gutterBottom variant="h5">Contact Me</Typography>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} sm={6} item>
                                <TextField label="First Name" placeholder="Enter first name" variant="outlined" fullWidth required />
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField label="Last Name" placeholder="Enter last name" variant="outlined" fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="email" label="Email" placeholder="Enter email" variant="outlined" fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="number" label="Phone number" placeholder="Enter phone number" variant="outlined" fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField label="Message" multiline rows={4} placeholder="Type your message" variant="outlined" fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

export default App;
