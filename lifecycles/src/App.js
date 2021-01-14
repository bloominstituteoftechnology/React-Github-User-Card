import React from "react";
import axios from "axios";
import "./App.css";

const followesList = () => {
  <h1>Followers</h1>;
  {
    this.state.followers.map((follow) => {
      return (
        <div>
          <p>{follow.login}</p>
          <img width="150" src={follow.avatar_url} />
          <a href={follow.events_url} />
        </div>
      );
    });
  }
};

class App extends React.Component {
  state = {
    user: "",
    followers: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/jeanluciano")
      .then((res) => {
        console.log(res.data);
        this.setState({
          user: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("https://api.github.com/users/jeanluciano/followers")
      .then((res) => {
        console.log(res);
        this.setState({
          followers: res.data,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <p> Name: {this.state.user.name}</p>
        <p> Username: {this.state.user.login}</p>
        <p> Followers: {this.state.user.followers}</p>
        <p>Following: {this.state.user.following}</p>

        <img alt="profile" src={this.state.user.avatar_url} width="250" />

        <div>
          {this.state.followers ? <h2> No Followers</h2> : followesList}
        </div>
      </div>
    );
  }
}

export default App;
