import React from "react";
import axios from "axios";
import UserCard from "./UserCard";
class ApiCalls extends React.Component {
  constructor() {
    super();
    this.state = {
      UserData: [],
      FollowersData: [],
      error: ""
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/mjs001")
      .then(res => {
        this.setState({
          UserData: res.data
        });
      })
      .catch(err => console.log("the error for the git for usercard", err));
  }
  render() {
    return (
      <div className="container">
        <h1>My React Followers and I:</h1>
        {this.state.UserData.map(data => {
          <UserCard>
            <h2>{data.name}</h2>
            <h3>{data.login}</h3>
            <p>followers: {data.followers}</p>
            <p>following: {data.following}</p>
            <p>bio: {data.bio}</p>
            <small>created: {data.created_at}</small>
          </UserCard>;
        })}
        ;
      </div>
    );
  }
}

export default ApiCalls;
