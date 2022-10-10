import React, { Component } from 'react'
// import { Header } from '../Header';
// import { Footer } from '../Footer';
import { Login } from './Login';
import { Register } from './Register';
import Grid from '@mui/material/Grid';

export class Landing extends Component {
    render() {
      return (
        <p>
          <Grid>
            {/* <Header /> */}
            <h1>Welcome to Folkzone!</h1>
          </Grid>
          <Grid container spacing={6} columns={16}>
            <Grid item xs={8}>
              <Register />
            </Grid>    
            <Grid item xs={8}>
              <Login />
            </Grid>
          </Grid>
          <Grid>
            {/* <Footer /> */}
          </Grid>    
        </p>
      );
    }
}