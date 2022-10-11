import React, { Component } from 'react'
import Main from '../Main';
import { Link } from 'react-router-dom';
import Label from "../Label"
import { Button, Avatar, CardContent, Typography, Grid, TextField, Box, Divider} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export class Profile extends Component {
    render() {
      return (
        <div>
          <Grid>
            <ArrowBackIcon />
            <Link to="/main" element={<Main />}>Go to main page</Link>
          </Grid>
          <Grid container xs={12}>
            <Grid item xs={6}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Button
                variant="outlined"
                onClick={() => {
                  alert('clicked');
                }}
                >Upload new picture</Button>
            </Grid>
            <Grid item xs={6}>
              <Label />
            </Grid>
          </Grid>
          <Divider />
          <Grid container spacing={6}>
            {/* Current info */}
            <Grid item xs={8}>
              <CardContent>
                <Typography sx={{ fontSize: 35 }} color="text.first">
                  Current information
                </Typography>
                <Typography sx={{ fontSize: 25 }} color="text.secondary">
                  Username
                </Typography>
                <Typography sx={{ fontSize: 25 }} color="text.secondary">
                  Email adddress
                </Typography>
                <Typography sx={{ fontSize: 25 }} color="text.secondary">
                  Phone number
                </Typography>
                <Typography sx={{ fontSize: 25 }} color="text.secondary">
                  Zipcode
                </Typography>
              </CardContent>
            </Grid>
            {/* Update info */}
            <Grid item xs={8}>
              {/* name, email, phone, zop, password, upload button */}
              <Box
              component="form"
              noValidate
              onSubmit={this.handleSubmit}
              sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="name"
                      // required
                      fullWidth
                      id="name"
                      label="Username"
                      autoComplete="name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      // required
                      fullWidth
                      id="phone"
                      label="Phone number"
                      name="phone"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      // required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      // required
                      fullWidth
                      id="zipcode"
                      label="Zip code"
                      name="zipcode"
                      autoComplete="zipcode"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      // required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Upload information
                </Button>
              </Box>
            </Grid>
          </Grid>
          {/* <Grid>
            <Link to="/main" element={<Main />}>Go to main page</Link>
          </Grid> */}
        </div>
      );
    }
  }