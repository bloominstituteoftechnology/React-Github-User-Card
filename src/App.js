import React from "react";
import axios from "axios";
import "./App.css";
import FollowerList from "./components/FollowerList";
import { GlobalStyle } from "./styles/GlobalStyle";

class App extends React.Component {
  state = {
    users: [],
    followers: []
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/asbaden")
      .then(res => {
        // res.data.message
        this.setState({
          users: res.data
        });
        console.log("this is response", res);
      })
      .catch(err => console.log(err));

    axios
      .get("https://api.github.com/users/asbaden/followers")
      .then(res => {
        // res.data.message
        this.setState({
          followers: res.data
        });
        console.log("this is response of followers", res);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <GlobalStyle>
        <h1>Gus' Followers</h1>
        <FollowerList followers={this.state.followers} />
      </GlobalStyle>
    );
  }
}

export default App;
