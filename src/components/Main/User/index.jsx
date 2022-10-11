import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import UserInfo from '../UserInfo';

export default class User extends Component {
    render() {
      return(
        <div>
            <Link to="/">Log out</Link>
            <Link to="/profile">Profile</Link>
            {/* User information */}
            <UserInfo />
            <Box
              component="form"
              noValidate
              onSubmit={this.handleSubmit}
              sx={{ mt: 3 }}>
                <TextField
                    name="status"
                    // required
                    fullWidth
                    id="status"
                    label="New status"
                //   autoFocus
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Update
                </Button>
              </Box>
        </div>
      );
    }
}