import React from "react";
import axios from "axios";
import UserCard from "./UserCard";
import "../App.css";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/Benji171")
      .then(res => {
        console.log(res.data.followers_url);
        this.setState({
          user: res.data
        });
      })
      .catch(err => console.log(err));

    axios
      .get("https://api.github.com/users/Benji171/followers")
      .then(res => {
        console.log(res.data);
        this.setState({
          followers: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="cards">
        <div className="main-card">
          {
            <UserCard
              login={this.state.user.login}
              id={this.state.user.id}
              avatar_url={this.state.user.avatar_url}
              location={this.state.user.location}
              html_url={this.state.user.html_url}
            />
          }
        </div>

        <div className="followers-card">
          {this.state.followers.map(follower => (
            <UserCard
              login={follower.login}
              id={follower.id}
              avatar_url={follower.avatar_url}
              location={follower.location}
              html_url={follower.html_url}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default User;