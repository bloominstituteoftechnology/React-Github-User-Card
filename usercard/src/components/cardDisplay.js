import React, { Component } from "react";
import axios from "axios";
import "../App.css";
export default class CardDisplay extends Component {
  state = {
    myUsers: [],
  };
  componentDidMount() {
    axios
      .get("https://api.github.com/users/SamSin369")
      .then((res) => {
        console.log(res);
        this.setState({ myUsers: res.data });
      })
      .catch((err) => {});
  }

  render() {
    return (
      <div className="row">
        <div className="column">
          <div className="card">
            <img
              src={this.state.myUsers.avatar_url}
              alt="profile"
              className="image-style"
            ></img>
            <h1>{this.state.myUsers.login}</h1>
            <p className="title">{this.state.myUsers.type}</p>
            <p className="repo-number">
              Repos:{this.state.myUsers.public_repos}
            </p>
            <a
              href={`${this.state.myUsers.html_url}`}
              target="_blank"
              rel="noreffer"
            >
              <button>Visit Profile</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
