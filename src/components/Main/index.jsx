import React, { Component } from "react";
import User from "./User";
import Label from "../Label";
import Friend from "./Friend";
import NewPost from "./NewPost";
import SearchBar from "./SearchBar";
import Post from "./Post";
import { Typography, Stack, Divider, Grid } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import store from "../../redux/store";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // startOfCards: 0,
      show_cards: [1, 2, 3],
      // cards: store.getState().postReducer.posts,
      cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      posts: store.getState().postReducer.posts,
    };
  }

  componentDidMount;

  onClickBack = () => {
    // console.log("back")
    const length = this.state.cards.length; // 10
    let prev_show_cards = this.state.show_cards;
    let new_show_cards = [0, 0, 0];
    for (var i = 0; i < 3; i++) {
      if (prev_show_cards[i] === 1) {
        prev_show_cards[i] = 10;
        new_show_cards[i] = prev_show_cards[i];
        continue;
      }
      new_show_cards[i] = (prev_show_cards[i] - 1) % length;
    }
    // console.log(new_show_cards)
    this.setState({
      show_cards: new_show_cards,
    });
  };

  onClickForward = () => {
    // console.log("forward")
    const length = this.state.cards.length; // 10
    let prev_show_cards = this.state.show_cards;
    // console.log(prev_show_cards);
    let new_show_cards = [0, 0, 0];
    for (var i = 0; i < 3; i++) {
      if (prev_show_cards[i] === 9) {
        prev_show_cards[i] = 10;
        new_show_cards[i] = prev_show_cards[i];
        continue;
      }
      new_show_cards[i] = (prev_show_cards[i] + 1) % length;
    }
    // console.log(new_show_cards)
    this.setState({
      show_cards: new_show_cards,
    });
  };

  render() {
    return (
      <div>
        <Grid container xs={12} spacing={5}>
          <Grid item xs={3}>
            {/* user info */}
            <Grid>
              <User />
            </Grid>
            {/* frinds */}
            <Grid>
              <Friend />
            </Grid>
          </Grid>
          <Grid item xs={9}>
            <Grid container spacing={1}>
              <Grid item columns={6}>
                <NewPost />
              </Grid>
              <Grid item columns={6}>
                <Label />
              </Grid>
            </Grid>
            {/* Search bar */}
            <Grid container>
              <Grid item columns={3}>
                <Typography>Search here</Typography>
              </Grid>
              <Grid item columns={7}>
                <SearchBar />
              </Grid>
            </Grid>
            {/* Post area */}
            <Grid
              container
              xs={9}
              md={12}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item md={0.5}>
                <ArrowBackIosIcon
                  fontSize="large"
                  onClick={this.onClickBack.bind(this)}
                />
              </Grid>
              <Grid item md={11}>
                <Stack
                  direction="row"
                  divider={<Divider orientation="vertical" flexItem />}
                  spacing={2}
                >
                  {/* {this.state.show_cards.map((show_card) => <Post key={show_card} />)} */}
                  {this.state.show_cards.map((card_index) => {
                    for (var i = 0; i < this.state.posts.length; i++) {
                      if (this.state.posts[i].id === card_index) {
                        return <Post cur_post={this.state.posts[i]} />;
                      }
                    }
                  })}
                </Stack>
              </Grid>
              <Grid item md={0.5}>
                <ArrowForwardIosIcon
                  fontSize="large"
                  onClick={this.onClickForward.bind(this)}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
