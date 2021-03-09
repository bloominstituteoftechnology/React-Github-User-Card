import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  state = {
    userCards: [],
    userFollowers: []
  };
  componentDidMount() {
    axios
      .get("https://api.github.com/users/SamSin369")
      .then((resp) => {
        console.log(resp);
        this.setState({
          userCards: resp.data
        });
      })
      .catch((err) => {
        debugger;
      });
    
  }
  

  render() {
    console.log(this.state.userCards);
   
    return (
      <div>
      <h3>Username:  {this.state.userCards.login}</h3>
      <h3>Name: {this.state.userCards.name}</h3>
      <h3>ID: {this.state.userCards.id}</h3>
    <h3>Followers: <a href={this.state.userCards.followers_url}>See Followers</a></h3>
      </div>)
  }
}
