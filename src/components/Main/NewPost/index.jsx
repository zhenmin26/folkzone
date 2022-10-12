import React, { Component } from "react";
import { Button, TextField, Box, IconButton, Grid, Card } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

export default class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  getDefaultState = () => {
    return { text: ""};
  }

  handleCancel() {
    this.setState(this.getDefaultState())
  }

  render() {
    return (
      <div>
        <Box>
          <Grid>
            <Grid container columns={12}>
              <Grid
                item
                columns={6}
                justifyContent="center"
                alignItems="center"
              >
                <Card>
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                  >
                    <input hidden accept="image/*" type="file" />
                    <PhotoCamera />
                  </IconButton>
                </Card>
              </Grid>
              <Grid item columns={6}>
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  // defaultValue="Your post here"
                  label="Post content"
                  value={this.state.text}
                  onChange={(event)=>{this.setState({text: event.target.value})}}
                />
              </Grid>
            </Grid>
            <Grid>
              <Button variant="outlined" onClick={this.handleCancel.bind(this)}>
                Cancel
              </Button>
              <Button variant="outlined">Post</Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}
