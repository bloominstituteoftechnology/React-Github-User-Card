import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

export default class App extends Component {

  state = { users: [] }

  componentDidMount() {
    axios.get('https://api.github.com/users/lambertoasghedom')
      .then(res => {
        const users = res.data
        this.setState({ users })
      })
      .catch(err => console.log(err))
  }


  render() {
    console.log(this.state.users)
    return (
      <div className="App">
        <h1>Github Users</h1>
      </div>
    );
  }
}
