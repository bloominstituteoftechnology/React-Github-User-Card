import React, { Component } from 'react'
import styled from "styled-components";
import "./App.css";
//import axios from "axios";

// importing files
import UserCard from "./components/UserCard";

//styling

const Body = styled.div`
  background-image: url("https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80");
`;

const Headline = styled.h1`
  font-size: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  color: darkorange;
  padding-bottom: 40px;
`;



// I need axios to call github api
// I need to render followers to screen
// will use componentDidMount
// initial state with followers

class App extends Component {
  //initailize state
  state = {
    userInfo: {},
    followers: [],
  };

  componentDidMount() {
    // after initial render
    //api call here https://api.github.com/users/jamakura
    // setting state here
    console.log(" SV: app.js: App, CDM: CDM running");

    //   fetching user profile

    fetch("https://api.github.com/users/jamakura")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ userInfo: json });
        console.log("SV: App.js: CMD: success!", this.state.userInfo);
      })
      .catch((err) => console.log(err));

    //   fetching user followers

    fetch("https://api.github.com/users/jamakura/followers")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ followers: json });
        console.log("SV: App.js: CMD: success!", this.state.followers);
      })
      .catch((err) => console.log(err));
  }

  //render to DOM

  render() {
    console.log("sv: App.js: App, render");
    return (
      <Body>
        <Headline>Github User Profiles!</Headline>
        <UserCard userInfo={this.state.userInfo} />
        {this.state.followers.map((follower) => {
          return <UserCard key={follower.id} userInfo={follower} />;
        })}
      </Body>
    );
  }
}

export default App;
