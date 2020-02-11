import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components"
// import Followers from "./components/FollowersCard";

import UserCard from "./UserCard";
// import UserCard from "./components/UserCard";


const MyCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  margin: auto;
  width: 150px;
  flex-wrap: wrap;
  align-self: auto
`
const Header = styled.h1`
  text-align: center; 
`

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      location: "",
      login: "",
      avatar: "",
      followers: []
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/jasonrhemann").then(response => {
      this.setState({
        name: response.data.name,
        location: response.data.location,
        login: response.data.login,
        avatar: response.data.avatar_url
      });
       console.log(response.data);
    });

    axios
      .get("https://api.github.com/users/jasonrhemann/followers")
      .then(response => {
        this.setState({
          followers: response.data
        });
         console.log("followers", response.data);
      });
  }


  render() {
    return (
      <div>
        <Header>GitHub Card</Header>
        {/* <p>{this.state.name}</p>
        <p>{this.state.login}</p>
        <img src={this.state.avatar} alt="" /> */}
        <MyCard>
        <UserCard  
          name = {this.state.name}
          login = {this.state.login}
          location = {this.state.location}
          avatar = {this.state.avatar}
        />
        </MyCard>
        <Header>Followers</Header>
        {this.state.followers.map(follower => {
          return (
            <MyCard>
            <UserCard
              name = {follower.name}
              login = {follower.login}
              location = {follower.location}
              avatar = {follower.avatar_url}
            />
            </MyCard>
          );
        })}
      </div>
    );
  }
}
export default App;
