import React, { Component } from 'react';
import axios from "axios";

export class App extends Component {
  state = {
    github: {},
    error: "",
  };

  componentDidMount() {
    axios
    .get(`https://api.github.com/users/hdm007`)
    .then((res) => {
      this.setState({
        github: res.data,
      });
    })
    .catch((err) => {
      this.setState({
        error: err.message,
      })
    })
  }

  render () {
    return (
      <React.Fragment>
        <h1>Github User Card</h1>
        {this.state.github === {} ? (
          <p>Loading info...</p>
        ) : <p> Yay! State is loaded! </p>}
      </React.Fragment>
    )
  }


}

export default App;
