import React, { Component } from 'react'
import { Box, TextField, Button} from '@mui/material';
import { BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom';
import Main from "../../Main"

export class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      login: false
    }
  }

  handleSubmit(event){
    event.preventDefault();
    // get user data
    const data = new FormData(event.currentTarget);
    // data.get("username")
    // data.get("password")
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => {
      // get array of objects(user info)
      json.forEach(user => {
        if(user.username == data.get("username") && data.get("password") == user.address.street){
          console.log("Login successfully")
          this.setState({
            login: true
          })
        }
      });

    })
  }

  render() {
    if(this.state.login){
      return (
        <Routes>
          <Route path="*" element={<Navigate to ="/main" />}/>
        </Routes>
      )
    }
    else{
      return (
        <Box
        component="form"
        onSubmit={this.handleSubmit}
        noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="login_password"
            label="login_password"
            type="password"
            id="login_password"
            // autoComplete="current-password"
          />
          <Button
            type="login"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </Box>
      )
    }
    
  }
}