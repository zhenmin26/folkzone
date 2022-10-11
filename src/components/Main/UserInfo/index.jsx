import React, { Component } from 'react'
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default class UserInfo extends Component {
    render() {
      return(
        <div>
            {/* User information */}
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Typography sx={{ fontSize: 25 }} color="text.first">
                Username
            </Typography>
            <Typography sx={{ fontSize: 20 }} color="text.secondary">
                User status
            </Typography>
        </div>
      );
    }
}