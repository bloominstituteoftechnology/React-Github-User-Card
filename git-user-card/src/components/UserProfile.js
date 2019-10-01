import React, { Component } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import FollowerList from "./FollowerList.js";

class UserProfile extends Component {
  constructor() {
    super();
    this.state = { user: "cjgodfather", search: "" };
    console.log(`user profile constructed`);
  }

  componentDidMount() {
    console.log(`user profile mounted`);
    axios
      .get(`https://api.github.com/users/cjgodfather`)
      .then(response => this.setState({ user: response.data }))
      .catch(error => console.log("something went wrong"));
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.search}`)
      .then(response => this.setState({ user: response.data }))
      .catch(error => console.log("something went wrong"));
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(`user profile updated`);
    if (prevState.search !== this.state.search) {
      axios
        .get(`https://api.github.com/users/${this.state.search}`)
        .then(response => this.setState({ user: response.data }))
        .catch(error => console.log("something went wrong"));
    }
  }

  render() {
    console.log(`user profile rendered`);
    return (
      <div className="appContainer">
        <form className="searchForm" onSubmit={this.submitHandler}>
          <input
            type="text"
            name="search"
            value={this.state.search}
            onChange={this.changeHandler}
            placeholder="search a github username"
          />
          <button>Search</button>
        </form>
        <UserCard
          image={this.state.user.avatar_url}
          name={this.state.user.name}
          bio={this.state.user.bio}
          location={this.state.user.location}
          follower={this.state.user.followers}
          following={this.state.user.following}
        />
        <h2>User {this.state.user.name}'s followers</h2>
        <FollowerList username={this.state.user.name} />
      </div>
    );
  }
}

export default UserProfile;
