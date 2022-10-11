import React, { Component } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

export default class NewPost extends Component {
    render() {
      return(
        <div>
          <Box>
            <Grid>
                <IconButton color="primary" aria-label="upload picture" component="label">
                    <input hidden accept="image/*" type="file" />
                    <PhotoCamera />
                </IconButton>
                <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                defaultValue="Your post here"
                />
            </Grid>
            <Grid>
                <Button variant="outlined">Cancel</Button>
                <Button variant="outlined">Post</Button>
            </Grid>
          </Box>
        </div>
      );
    }
}