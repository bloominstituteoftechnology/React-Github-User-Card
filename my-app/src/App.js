import React from "react";
// import { Component } from "react";
import axios from "axios";
import GHcard from "./components/cardcreator"
import "./App.css";

class App extends React.Component {
  state = {
    followers: []
  };

  componentDidMount() {
    const array = [
      "tomas395",
      "davebettswebdev",
      "alexandercsierra",
      "NathanNNguyen",
      "nicbongo"
    ];

    array.map(item => {
      axios
        .get(`https://api.github.com/users/${item}`)
        .then(res => {
          console.log(res.data);
          this.setState({ followers: [...this.state.followers, res.data] });
        })
        .catch(err => console.log(err));
    });
  }

  render() {
   console.log(this.state.followers)
    return (
      
      <div>
        
        {this.state.followers.map(item => (
          <div>
            <GHcard
              avatar_url={item.avatar_url}
              name={item.name}
              login={item.login}
              location={item.location}
              repos_url={item.repos_url}
              url={item.url}
              followers={item.followers}
              following={item.following}
              bio={item.bio}
            />
          </div>
        ))}
      </div>
    );
  }
}
export default App;
