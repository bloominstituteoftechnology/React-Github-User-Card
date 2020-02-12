import React from "react";
import axios from "axios";
import UserCard from "./UserCard";
import FollowersCard from "./FollowersCard";
import FollowersList from "./FollowersList";
//initial state:

class ApiCalls extends React.Component {
  state = {
    UserData: [],
    FollowersData: [],
    error: ""
  };

  //get request for user
  componentDidMount() {
    axios
      .get("https://api.github.com/users/mjs001")
      .then(res => {
        this.setState({
          UserData: res.data
        });
        console.log(res.data);
      })
      .catch(err => console.log("the error for the git for userdata", err));
    //get request for followers
    axios
      .get("https://api.github.com/users/mjs001/followers")
      .then(res => {
        this.setState({
          FollowersData: res.data
        });
        console.log(res.data);
      })
      .catch(err =>
        console.log("the error for the git for followersdata", err)
      );
  }

  render() {
    return (
      <div className="container">
        <h1>My React Followers and I:</h1>
        <UserCard UserData={this.state.UserData} />
        <div className="follower">
          <FollowersList FollowersData={this.state.FollowersData} />
        </div>
      </div>
    );
  }
}
export default ApiCalls;
