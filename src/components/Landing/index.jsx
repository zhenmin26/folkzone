import React, { Component } from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import Grid from "@mui/material/Grid";
import Label from "../Label";
import store from "../../redux/store"

export class Landing extends Component {
  constructor(props) {
    super(props);
    // set posts and all users to localstorage
    this.getAllUsers()
    this.getAllPosts()
  }

  getAllUsers(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        // get all users
        store.dispatch({ type: "getAllUser", data: json });
        localStorage.setItem('allUsers', JSON.stringify(json));
        localStorage.setItem('login', false)
      });
  }

  getAllPosts(){
    // console.log("get posts")
    const posts = [
      {
        "author": "Eliseo",
        "id": 1,
        "date": "2022-01-03",
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "author": "gardner",
        "id": 2,
        "date": "2021-01-03",
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "author": "biz",
        "id": 3,
        "date": "2020-01-03",
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
      {
        "author": "Nikita",
        "id": 4,
        "date": "2022-02-03",
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
      },
      {
        "author": "garfield",
        "id": 5,
        "date": "2022-03-03",
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
      },
      {
        "author": "Lew",
        "id": 6,
        "date": "2022-04-03",
        "title": "dolorem eum magni eos aperiam quia",
        "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
      },
      {
        "author": "Hayden",
        "id": 7,
        "date": "2022-01-05",
        "title": "magnam facilis autem",
        "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
      },
      {
        "author": "Mallory",
        "id": 8,
        "date": "2022-01-06",
        "title": "dolorem dolore est ipsam",
        "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
      },
      {
        "author": "Kunze",
        "id": 9,
        "date": "2022-01-07",
        "title": "nesciunt iure omnis dolorem tempora et accusantium",
        "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
      },
      {
        "author": "Meghan_Littel",
        "id": 10,
        "date": "2022-01-10",
        "title": "optio molestias id quia eum",
        "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
      }]
    localStorage.setItem('posts', JSON.stringify(posts))
  }

  render() {
    return (
      <div>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Label />
        </Grid>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={4} alignItems="center">
            <Register />
          </Grid>
          <Grid item xs={4} alignItems="center">
            <Login />
          </Grid>
        </Grid>
      </div>
    );
  }
}
