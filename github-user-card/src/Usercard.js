import React, { Component } from "react";

export default class Usercard extends Component {
  render(props) {
    return (
      <div className="card">
        <img src={""} />
        <div className="card-info">
          <h3>{this.props.name}</h3>
          <p className="username">{this.props.username}</p>
          <p>Location: {this.props.location}</p>
          <p>
            Profile:
            <a href={"address to users github page"}>
              {"address to users github page"}
            </a>
          </p>
          <p>Followers: {this.props.followers}</p>
          <p>Following: {this.props.following}</p>
          <p>Bio: {this.props.bio}</p>
        </div>
      </div>
    );
  }
}
