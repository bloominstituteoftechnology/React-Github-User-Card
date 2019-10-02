import React from 'react';
import './App.css';
import UserCard from './Components/UserCard.js';


import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: 'a-soren',
      user: {},
      followers: []
    };
  }

  changeUserName = (userName) => {
    this.setState({ userName })
  }

  componentDidMount() {
    this.usersGet();
    this.usersFollowers();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("CDU", this.state)
    if(prevState.userName !== this.state.userName) {
      console.log(prevState.userName)
      this.usersGet();
      this.usersFollowers();
    
    }
  }

  usersGet = () => {
    axios
      .get('https://api.github.com/users/a-soren')
      .then(res => {
        console.log(res);
        this.setState({ user: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  usersFollowers = () => {
    axios
    .get(`https://api.github.com/users/a-soren/followers`)
    .then(res => {  console.log(res.data);
      this.setState({ followers: res.data });
    });
  };

  render() {
    return (
      <div className='App'>
        <UserCard user={this.state.user} followers={this.state.followers} />
      </div>
    );
  }
}

export default App;