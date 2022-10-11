import React, { Component } from 'react'
import { Button, TextField, Box, IconButton, Grid, Card } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

export default class NewPost extends Component {
    render() {
      return(
        <div>
          <Box>
            <Grid>
              <Grid
              container
              columns={12}
              >
                <Grid item columns={6}
                justifyContent="center"
                alignItems="center"
                >
                  <Card>
                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <input hidden accept="image/*" type="file" />
                        <PhotoCamera />
                    </IconButton>
                  </Card>
                </Grid>
                <Grid item columns={6}>
                  <TextField
                  id="outlined-multiline-static"
                  multiline
                  defaultValue="Your post here"
                  />
                </Grid>
              </Grid>
              <Grid
              >
                  <Button variant="outlined">Cancel</Button>
                  <Button variant="outlined">Post</Button>
              </Grid>
            </Grid>
          </Box>
        </div>
      );
    }
}