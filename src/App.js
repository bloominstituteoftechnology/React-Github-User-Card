import React from "react";

import "./App.css";
import axios from "axios";
import GithubCard from "./Components/GithubCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      githubData: [],
      githubFollowers: [],
      githubText: ""
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/abdimohamud")
      .then((response) => {
        this.setState({
          githubData: response.data
        });
      })
      .catch((error) => {
        return error;
      });

    axios
      .get("https://api.github.com/users/abdimohamud/followers")
      .then((response) => {
        this.setState({
          githubFollowers: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChanges = (e) => {
    this.setState({
      githubText: e.target.value
    });
  };
  fetchGithubData = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.githubText}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          githubData: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(`https://api.github.com/users/${this.state.githubText}/followers`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          githubFollowers: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="bubbles">
        <div className="App">
          <div className="title">
            <FontAwesomeIcon icon={faGithub} size="10x" />
            <h1>Github Google</h1>
          </div>

          <div className="search">
            <h2>Enter your Github Username</h2>
            <input
              label="github-username"
              type="text"
              value={this.state.githubText}
              onChange={this.handleChanges}
            />
            <button onClick={this.fetchGithubData}>Display Profile</button>
          </div>

          <GithubCard
            githubData={this.state.githubData}
            githubFollowers={this.state.githubFollowers}
          />
        </div>
      </div>
    );
  }
}
