import React, { Component } from "react";
import User from "./User";
import Label from "../Label";
import Friend from "./Friend";
import NewPost from "./NewPost";
// import SearchBar from "./SearchBar/";
import SearchIcon from "@mui/icons-material/Search";
import Post from "./Post";
import {
  // Typography,
  Stack,
  Divider,
  Grid,
  TextField,
  Box,
  Button,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import store from "../../redux/store";
// import { Link } from "react-router-dom";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // startOfCards: 0,
      show_cards: [1, 2, 3],
      // cards: store.getState().postReducer.posts,
      length: 10,
      posts: store.getState().postReducer.posts,
      allUsers: store.getState().userReducer.allUsers || [],
      friendUserIds: store.getState().userReducer.friendUserIds || [],
      searchValue: "",
    };
  }

  // componentDidMount;

  onClickBack = () => {
    // console.log("back")
    const length = this.state.length; // 10
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
    const length = this.state.length; // 10
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

  handleSubmit(event) {
    event.preventDefault();
    // get new friend username
    const data = new FormData(event.currentTarget);
    console.log(data.get("friend"));
    this.state.allUsers.forEach((user) => {
      if (user.username === data.get("friend")) {
        store.dispatch({ type: "addFriend", data: user.id });
        this.setState({
          friendUserIds: store.getState().userReducer.friendUserIds,
        });
      }
    });
  }

  handleSearch(event) {
    event.preventDefault();
    // get new friend username
    const data = new FormData(event.currentTarget);
    const search_value = data.get("search");
    // console.log(data.get("search"));
    if(search_value === ""){
      this.setState({
        show_cards: [1, 2, 3]
      })
    }
    else{
      let shows = []
      store.getState().postReducer.posts.forEach((post) => {
        if (
          post.author.indexOf(search_value) !== -1 ||
          post.body.indexOf(search_value) !== -1 ||
          post.title.indexOf(search_value) !== -1
        ) {
          shows.push(post.id)
        }
      });
      this.setState({
        show_cards: shows
      })
    }
  }

  onChangeState(new_state) {
    this.setState(new_state);
  }

  render() {
    // console.log("main")
    return (
      <div>
        {/* <Link to="/">Log out</Link> */}
        <Button variant="text" href="/">
          Log out
        </Button>
        {/* <Link to="/profile">Profile</Link> */}
        <Button variant="text" href="/profile">
          Profile
        </Button>

        <Grid container xs={12} spacing={5}>
          <Grid item xs={3}>
            {/* user info */}
            <Grid>
              <User />
            </Grid>
            {/* frinds */}
            <Box component="form" onSubmit={this.handleSubmit.bind(this)}>
              <Grid>
                {this.state.allUsers.map((user) => {
                  if (this.state.friendUserIds.includes(user.id)) {
                    return (
                      <Friend
                        userInfo={user}
                        onRemoveFriend={this.onChangeState.bind(this)}
                      />
                    );
                  }
                })}
              </Grid>
              <TextField
                name="friend"
                // required
                id="friend"
                label="New Friend"
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                fullWidth
              >
                Add
              </Button>
            </Box>
          </Grid>
          <Grid item xs={8}>
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
              {/* <Grid item columns={3}>
                <Typography>Search here</Typography>
              </Grid> */}
              <Grid item columns={7}>
                {/* <SearchBar onSearch={this.onSearchPost.bind(this)}/> */}
                <Box component="form" onSubmit={this.handleSearch.bind(this)}>
                  <TextField
                    margin="normal"
                    fullWidth
                    id="search"
                    label="Search post"
                    name="search"
                    onChange={(event)=>{
                      // console.log(event.target.value)
                      if(event.target.value === ""){
                        this.setState({
                          show_cards: [1,2,3]
                        })
                      }
                    }}
                  />
                  <Button type="submit">
                    <SearchIcon />
                  </Button>
                </Box>
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
