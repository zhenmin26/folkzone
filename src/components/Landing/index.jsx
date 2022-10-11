import React, { Component } from 'react'
import { Login } from './Login';
import { Register } from './Register';
import Grid from '@mui/material/Grid';
import Label from '../Label';

export class Landing extends Component {
    render() {
      return (
        <div>
          <Grid>
            <Label />
          </Grid>
          <Grid container spacing={6} columns={16}>
            <Grid item xs={8}>
              <Register />
            </Grid>    
            <Grid item xs={8}>
              <Login />
            </Grid>
          </Grid>
        </div>
      );
    }
}