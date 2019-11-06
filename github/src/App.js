import React from 'react';
import axios from 'axios';
import UserCard from './Components/UserCard.js'

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    // console.log("here");
    axios.get('https://api.github.com/users/vetorobert3')
      .then((res) => {
        console.log(res.data);
        this.setState({ users: res })
      })
      .catch((err) => {
        console.log(err)
      });
  }

  render() {
    return(
      <div>
        <h1>GitHub Users</h1>
        <div>{this.state.login}</div>
        <UserCard namesProp={this.state.users}/>
      </div>
    );
  }

}

export default App;
