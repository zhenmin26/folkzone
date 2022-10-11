import React, { Component } from 'react'
import Main from '../Main';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Label from "../Label"

export class Profile extends Component {
    render() {
      return (
        <div>
          {/* cannot click, but the link works */}
          <Link to="/main" element={<Main />}>Go to main page</Link>
          <Grid container spacing={6} columns={16}>
            <Grid item xs={8}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Button
                variant="outlined"
                onClick={() => {
                  alert('clicked');
                }}
                >Upload new picture</Button>
            </Grid>
            <Grid item xs={8}>
              <Label />
            </Grid>
          </Grid>
          <Divider />
          <Grid container spacing={6} columns={16}>
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