import React, { Component } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export class Register extends Component {
  constructor(props){
    super(props)
    this.state = {
      login: false
    }
  }

  checkPhone(phone){
    console.log("Checking phone")
    let pattern = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
    if(pattern.test(phone) == false){
      console.log("Invalid phone number.")
    }
  }

  checkBirthdate(birth){
    let today = new Date()
    let birthdate = birth.split("-")
    let year = birthdate[0]
    let month = birthdate[1]
    let day = birthdate[2]
    let age = today.getFullYear() - parseInt(year)
    let m = today.getMonth() + 1 - parseInt(month)
    if(m < 0){
      age -= 1
    }
    let d = today.getDate() - parseInt(day)
    if(m === 0 && d < 0){
      age -= 1
    }
    if(age<18){
      console.log("Age under 18, invalid to register.")
    }
  }

  checkEmail(email){
    console.log("Checking email")
    let pattern = /(\w+\.?\w*)\+?\w*@\w+\.?\w*\.[a-z]+/;
    if(pattern.test(email) == false){
      console.log("Invalid email number.")
    }
  }

  checkZipcode = (zipcode)=>{
    console.log("Checking zipcode")
    let pattern = /[0-9]{5}/;
    if(pattern.test(zipcode) == false){
      console.log("Invalid zip code.")
    }
  }

  checkPwd(pwd, confirmPwd){
    console.log("Checking password")
    if(pwd !== confirmPwd){
      console.log("Invalid password.")
    }
  }

  handleSubmit(event){
    event.preventDefault();
    // get register data
    const data = new FormData(event.currentTarget);
    // this.checkPhone(data.get("phone"));
    if(!(/[0-9]{3}-[0-9]{3}-[0-9]{4}/.test(data.get("phone")))){
      console.log("Invalid phone")
    }
    // this.checkBirthdate(data.get("date"));
    
    // this.checkEmail(data.get("email"));
    // (/(\w+\.?\w*)\+?\w*@\w+\.?\w*\.[a-z]+/.test(data.get("email")))
    else if(!(/(\w+\.?\w*)\+?\w*@\w+\.?\w*\.[a-z]+/.test(data.get("email")))){
      console.log("Invalid email")
    }
    // this.checkZipcode(data.get("zipcode"));
    // (/[0-9]{5}/.test(data.get("zipcode")))
    else if(!(/[0-9]{5}/.test(data.get("zipcode")))){
      console.log("Invalid zipcode")
    }
    // this.checkPwd(data.get("password"), data.get("confirmPassword"));
    else if(!(data.get("password") == data.get("confirmPassword"))){
      console.log("wrong password")
    }
    else{
      this.setState({
        login: true
      })
    }
  }

  haha = ()=> {
    console.log("haha")
  }

  render() {
    return(
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
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="displayName"
              label="Display name"
              name="displayName"
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
              id="date"
              label="Birth date"
              type="date"
              // defaultValue="1999-01-21"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
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
          <Grid item xs={12}>
            <TextField
              // required
              fullWidth
              name="confirmPassword"
              label="Confirm password"
              type="password"
              id="confirmPassword"
              autoComplete="confirm-password"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Register
        </Button>
      </Box>
    );
  }
}