import React from "react";
import axios from "axios";
import UserCard from "./UserCard";
class ApiCalls extends React.Component {
  state = {
    UserData: [],
    FollowersData: [],
    error: ""
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/mjs001")
      .then(res => {
        this.setState({
          UserData: res.data
        });
        console.log(res.data);
      })
      .catch(err => console.log("the error for the git for usercard", err));
  }

  render() {
    return (
      <div className="container">
        <h1>My React Followers and I:</h1>
        <UserCard UserData={this.state.UserData} />
      </div>
    );
  }
}
export default ApiCalls;
