import React, { Component } from "react";
import axios from "axios";
import Followers from "./Components/followers";
import styled from "styled-components";

const Div = styled.div`
  width: 1200px
  margin: 0 auto;
  text-align: center;
`;
const Div2 = styled.div`
  display: flex;
  text-align: left;
`;
const Div3 = styled.div`
  text-align: left;
  margin-left: 2rem;
`;
const Div4 = styled.div`
  margin: 2rem 0;
`;

const Img = styled.img`
  max-width: 350px;
  max-height: 350px;
  border-radius: 5px;
  margin: auto 0;
`;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      follow: []
    };
  }

  getGitUser = () => {
    axios
      .get("https://api.github.com/users/JacobWilliams90")
      .then(res => {
        this.setState({
          data: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  gitGitFollowers = () => {
    axios
      .get("https://api.github.com/users/JacobWilliams90/followers")
      .then(res => {
        this.setState({
          follow: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getGitUser();
    this.gitGitFollowers();
  }

  render() {
    return (
      <Div>
        <h2>Git Hub Usercard</h2>
        <Div2>
          <Img src={this.state.data.avatar_url} alt="userimg" />
          <Div3>
            <h1>{this.state.data.name}</h1>
            <h3>{this.state.data.login}</h3>
            <h4>{this.state.data.location}</h4>
            <h4>Repos: {this.state.data.public_repos}</h4>
            <p>Followers: {this.state.data.followers}</p>
            <p>Following: {this.state.data.following}</p>
            <p>Bio: {this.state.data.bio}</p>
            <img
              src={`http://ghchart.rshah.org/${this.state.data.login}`}
              alt="gitcard"
            />
          </Div3>
        </Div2>
        <Div4>
          <h2>My Followers:</h2>
          {this.state.follow.map((follower, index) => (
            <Followers follower={follower} key={index} />
          ))}
        </Div4>
      </Div>
    );
  }
}
