import React from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import FollowerCard from "./components/FollowerCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: ["john schneider"],
      theFollowing: []
    };
  }

  componentDidMount() {
    this.fetchUsers();
    this.fetchFollowers();
  }

  fetchFollowers = () => {
    fetch(`https://api.github.com/users/justsml/followers`)
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log("followers:", res);
        this.setState({ theFollowing: res });
        console.log(this.state.theFollowing);
      })
      .catch(err => {
        console.error(err);
      });
  };

  fetchUsers = () => {
    fetch("https://api.github.com/users/johnschneider1")
      .then(res => {
        return res.json();
      })
      // .then(anotherResponse => console.log(anotherResponse))
      .then(res => {
        console.log("test api", res);
        this.setState({ users: res });
        console.log("users:", this.state.users);
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    return (
      <div className="main-container">
        <h1>Github Users</h1>
        <div className="card-area">
          <UserCard person={this.state.users} />
        </div>
        <div className="followers-area">
          {this.state.theFollowing.map(follow => (
            <FollowerCard follow={follow} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
