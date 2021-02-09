import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      githubCard: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/ooladuwa")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Github UserCard</h1>
      </div>
    );
  }
}
