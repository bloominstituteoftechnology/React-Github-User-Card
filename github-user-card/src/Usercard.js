import React, { Component } from "react";

export default class Usercard extends Component {
  render() {
    return (
      <div className="card">
        <img src={""} />
        <div className="card-info">
          <h3>{"users name"}</h3>
          <p class="username">{"users user name"}</p>
          <p>Location: {"users location"}</p>
          <p>
            Profile:
            <a href={"address to users github page"}>
              {"address to users github page"}
            </a>
          </p>
          <p>Followers: {"users followers count"}</p>
          <p>Following: {"users following count"}</p>
          <p>Bio: {"users bio"}</p>
        </div>
      </div>
    );
  }
}
