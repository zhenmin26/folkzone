import React, { Component } from 'react';
import UserInfo from '../UserInfo';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default class Friend extends Component {
    render() {
      return(
        <div>
            <UserInfo />
            <UserInfo />
            <Box
              component="form"
              noValidate
              onSubmit={this.handleSubmit}
              sx={{ mt: 3 }}>
                <TextField
                    name="user"
                    // required
                    fullWidth
                    id="user"
                    label="New frinend"
                //   autoFocus
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                    Add
                </Button>
              </Box>
        </div>
      );
    }
}