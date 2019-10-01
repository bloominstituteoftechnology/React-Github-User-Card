import React, { Component } from "react";
import axios from "axios";
import FollowerCard from "./FollowerCard";

class FollowerList extends Component {
  constructor() {
    super();
    this.state = { followers: [] };
    console.log("follower list constructed");
  }

  componentDidMount() {
    console.log(`follower list mounted`);
    axios
      .get(`https://api.github.com/users/${this.props.username}/followers`)
      .then(response => this.setState({ followers: response.data }))
      .catch(error => console.log("something went wrong"));
  }

  componentDidUpdate(prevState, prevProps) {
    if (prevProps !== this.props || prevState !== this.state) {
      axios
        .get(`https://api.github.com/users/${this.props.username}/followers`)
        .then(response => this.setState({ followers: response.data }))
        .catch(error => console.log("something went wrong"));
    }
    console.log(`follower list updated`);
  }
  render() {
    console.log(`follewer list rendered`);
    return (
      <div className="followersContainer">
        {this.state.followers
          ? this.state.followers.map(follower => (
              <FollowerCard
                key={follower.login}
                name={follower.login}
                image={follower.avatar_url}
              />
            ))
          : null}
      </div>
    );
  }
}

export default FollowerList;
