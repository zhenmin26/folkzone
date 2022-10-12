import React, { Component } from "react";
import store from "../../../redux/store";

import {
  Typography,
  CardMedia,
  Button,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";

export default class Post extends Component {
  constructor(props) {
    super(props);
    // console.log("index in post: " + props.index)
  }

  componentDidUpdate(){
    this.render()
  }

  render() {
    return (
      <div>
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <CardMedia
            component="img"
            sx={{
              // 16:9
              pt: "10%",
            }}
            image="https://source.unsplash.com/random"
            alt="random"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {/* Heading */}
              {this.props.cur_post.id}-{this.props.cur_post.title}
              {/* {this.state.posts.map((post) => {
                if (post.id === this.state.index) {
                  return post.title;
                }
              })} */}
            </Typography>
            <Typography>
              {/* This is a media card. You can use this section to describe the
              content. */}
              {this.props.cur_post.body}
              {/* {this.state.posts.map((post) => {
                if (post.id === this.state.index) {
                  return post.body;
                }
              })} */}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Edit</Button>
            <Button size="small">Comment</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
