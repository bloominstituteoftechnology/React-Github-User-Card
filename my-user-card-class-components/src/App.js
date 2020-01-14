import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import UserCard from "./components/UserCard";

class App extends Component {
  //constructor, and super not needed
  state = {
    user: [],
    followers: []
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/Ramonta-Lee")
      .then(response => {
        this.setState({
          user: response.data
        });
        console.log(response);
      })
      .catch(error => console.log(error))
      .finally(
        axios
          .get(`https://api.github.com/users/Ramonta-Lee/followers`)
          .then(res => {
            console.log(res);
            this.setState({
              followers: res.data
            });
          })
          .catch(err => {
            console.log(err);
          })
          .finally(console.log("axios call complete"))
      );
  }

  render() {
    return (
      <section className="card-container">
        <UserCard user={this.state.user} />
        {this.state.followers.map((follower, i) => {
          return <UserCard key={i} user={follower} />;
        })}
      </section>
    );
  }
}

export default App;
