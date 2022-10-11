import React, { Component } from 'react'
import { Grid, Typography } from '@mui/material';
import logo from '../../static/logo.png';

export default class Label extends Component {
    render() {
      return(
        <div>
          <Grid container>
            <Grid item>
              <img src={logo} alt="Logo"></img>
            </Grid>
            <Grid item>
              <Grid>
                <Typography variant="h4">
                  Welcome to Folkzone!
                </Typography>
              </Grid>
              <Grid>
                <Typography variant="h5">
                  A place for folks
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </div>
      );
    }
}