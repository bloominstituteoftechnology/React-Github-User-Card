import React, { Component } from 'react';
import axios from 'axios';
import UserCard from "./components/UserCard"

import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      userInfo: []
    }
  }

  componentDidMount() {
    this.fetchUser();

  }

  fetchUser = () => {
    axios.get('https://api.github.com/users/gcj2')
      .then (response => {
        console.log('response.data:', response.data);
        const userInfo = response.data;
        this.setState({userInfo})
        })
        .catch(err => {
          console.log(err);
        })
  }

  render() {
    console.log('userInfo', this.state.userInfo);
    return (
      <div>
        <UserCard user={this.state.userInfo} />
      </div>
    );
  }

}

export default App;
