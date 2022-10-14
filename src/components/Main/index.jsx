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
  Container,
  Typography,
  Chip,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import store from "../../redux/store";
import { Link } from "react-router-dom";
// import { ConstructionOutlined } from "@mui/icons-material";
// import { Navigate } from "react-router-dom";

export default class Main extends Component {
  constructor(props) {
    // console.log(store.getState().userReducer.allUsers)
    super(props);
    this.state = {
      // startOfCards: 0,
      show_cards: [1, 2, 3],
      // cards: store.getState().postReducer.posts,
      length: 10,
      posts: store.getState().postReducer.posts,
      curUser: store.getState().userReducer.curUser,
      allUsers:
        // JSON.parse(localStorage.getItem("allUsers")) ||
        store.getState().userReducer.allUsers || [],
      friendUserIds: store.getState().userReducer.friendUserIds || [],
      searchValue: "",
      friendInput: "",
    };
  }

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
    // console.log(data.get("friend"));
    this.state.allUsers.forEach((user) => {
      if (user.username === data.get("friend")) {
        store.dispatch({ type: "addFriend", data: user.id });
        this.setState({
          friendUserIds: store.getState().userReducer.friendUserIds,
          friendInput: "",
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
    if (search_value === "") {
      this.setState({
        show_cards: [1, 2, 3],
      });
    } else {
      let shows = [];
      store.getState().postReducer.posts.forEach((post) => {
        if (
          post.author.indexOf(search_value) !== -1 ||
          post.body.indexOf(search_value) !== -1
        ) {
          shows.push(post.id);
        }
      });
      this.setState({
        show_cards: shows,
      });
    }
  }

  onChangeState(new_state) {
    this.setState(new_state);
  }

  render() {
    if (JSON.parse(localStorage.getItem("login"))) {
      // console.log("re-render main");
      return (
        <div>
          <Button
            variant="text"
            onClick={() => {
              // console.log("user log out")
              localStorage.setItem("login", false);
              localStorage.setItem("curUser", null);
              localStorage.setItem("friendUserIds", JSON.stringify([]));
            }}
          >
            {/* Log out */}
            <Link to="/">Log out</Link>
          </Button>
          <Button variant="text">
            {/* Profile */}
            <Link to="/profile">Profile</Link>
          </Button>
          {/* <Container> */}
          <Grid container spacing={2}>
            <Grid
              item
              xs={3}
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              {/* user info */}
              <Grid>
                <User />
                <Divider>
                  <Typography variant="h5" color="primary">
                    Followers
                  </Typography>
                </Divider>
              </Grid>

              {/* frinds */}
              <Box component="form" onSubmit={this.handleSubmit.bind(this)}>
                <Grid>
                  {this.state.allUsers.map((user) => {
                    // console.log("333")
                    // console.log(
                    //   JSON.parse(localStorage.getItem("friendUserIds"))
                    // );
                    if (
                      JSON.parse(
                        localStorage.getItem("friendUserIds")
                      ).includes(user.id)
                    ) {
                      return (
                        <Grid spacing={2} direction="column" container>
                          <Grid item>
                            <Friend
                              userInfo={user}
                              onRemoveFriend={this.onChangeState.bind(this)}
                            />
                          </Grid>
                          <Grid item>
                            <Divider />
                          </Grid>
                        </Grid>
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
                  value={this.state.friendInput}
                  onChange={(e) => {
                    this.setState({ friendInput: e.target.value });
                  }}
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
            <Grid item xs={9}>
              <Grid container xs={12} spacing={2}>
                <Grid item xs={5}>
                  <NewPost />
                </Grid>
                <Grid item xs={7}>
                  <Label />
                </Grid>
              </Grid>
              {/* Search bar */}
              <Grid>
                {/* <Grid item columns={3}>
                  <Typography>Search here</Typography>
                </Grid> */}

                {/* <SearchBar onSearch={this.onSearchPost.bind(this)}/> */}
                <Box component="form" onSubmit={this.handleSearch.bind(this)}>
                  <Grid
                    container
                    xs={12}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid item xs={9}>
                      <TextField
                        margin="normal"
                        // fullWidth
                        id="search"
                        label="Search post"
                        name="search"
                        fullWidth
                        // sx={{ width: 830 }}
                        onChange={(event) => {
                          // console.log(event.target.value)
                          if (event.target.value === "") {
                            this.setState({
                              show_cards: [1, 2, 3],
                            });
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Button type="submit">
                        <SearchIcon />
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              {/* Post area */}
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                xs={12}
              >
                <Grid item>
                  <ArrowBackIosIcon
                    fontSize="large"
                    onClick={this.onClickBack.bind(this)}
                  />
                </Grid>
                <Grid item xs={11}>
                  <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                  >
                    {/* {this.state.show_cards.map((show_card) => <Post key={show_card} />)} */}
                    {this.state.show_cards.map((card_index) => {
                      for (var i = 0; i < this.state.posts.length; i++) {
                        if (this.state.posts[i].id === card_index) {
                          return <Post cur_post={this.state.posts[i]} author={this.state.curUser}/>;
                        }
                      }
                    })}
                  </Stack>
                </Grid>
                <Grid item>
                  <ArrowForwardIosIcon
                    fontSize="large"
                    onClick={this.onClickForward.bind(this)}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* </Container> */}
        </div>
      );
    } else {
      return (
        <div>
          Please log in first
          <Button variant="text">
            {/* Profile */}
            <Link to="/">Go to landing page</Link>
          </Button>
        </div>
      );
    }
  }
}
