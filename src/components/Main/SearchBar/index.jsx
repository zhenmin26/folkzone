import React, { Component } from "react";
import { Box, TextField, Button, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default class SearchBar extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const searchValue = data.get("search");
    return searchValue;
  };

  render() {
    return (
      <Box component="form" onSubmit={this.handleSubmit.bind(this)}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="search"
          label="Search post"
          name="search"
        />
        <Button type="submit">
          <SearchIcon />
        </Button>
      </Box>
    );
  }
}
