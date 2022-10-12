import React, { Component } from 'react';
import User from './User';
import Label from "../Label";
import Friend from './Friend';
import NewPost from "./NewPost";
import SearchBar from "./SearchBar"
import Post from './Post';
import { Typography, Stack, Divider, Grid} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      cards: [1, 2, 3]
    }
  }
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
            <Grid container >
              <Grid item columns={3}>
                <Typography>Search here</Typography>
              </Grid>
              <Grid item columns={7}>
                <SearchBar />
              </Grid>
            </Grid>
            {/* Post area */}
            <Grid container xs={9} md={12}
            justifyContent="center"
            alignItems="center"
            >
              <Grid item md={0.5}>
                <ArrowBackIosIcon fontSize="large" />
              </Grid>
              <Grid item md={11}>
                <Stack
                  direction="row"
                  divider={<Divider orientation="vertical" flexItem />}
                  spacing={2}
                >
                  {this.state.cards.map((card) => (
                      <Grid item key={card} columns={3}>
                        <Post />
                      </Grid>
                    ))}
                </Stack>
              </Grid>
              <Grid item md={0.5}>
                <ArrowForwardIosIcon fontSize="large" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}