import React, { Component } from "react";
import MainUser from "./components/main-user/main-user";

import axios from "axios";

import "./App.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }
  componentDidMount() {
    axios.get("https://api.github.com/users/alanblee").then((res) => {
      this.setState({
        user: res.data,
      });
    });
  }

  render() {
    const { user } = this.state;
    return <div>{user ? <MainUser mainUser={user} /> : null}</div>;
  }
}

export default App;
