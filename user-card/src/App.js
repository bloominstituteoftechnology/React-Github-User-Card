import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import UserCard from "./components/UserCard";
import FollowerCard from "./components/FollowerCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: [],
      followers: [],
      newFollow: []
    };
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/squashgray`).then(response => {
      console.log(response.data);
      this.setState({
        person: response.data
      });
    });

    axios
      .get(`https://api.github.com/users/squashgray/followers`)
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
      <div className="App">
        <h1>Github Hub</h1>
        <div className="User">
          <UserCard user={this.state.person} />
        </div>
        <h2>My Followers</h2>
        <div className="Cards">
          {this.state.followers.map(follower => (
            <FollowerCard key={follower.id} follower={follower} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
