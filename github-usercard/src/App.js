import React from 'react';
import './App.css';

import UserCard from './components/UserCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  //state = {}

//https://api.github.com/users/jadelopez

  fetchUsers = () => {
    fetch(`https://api.github.com/users/jadelopez`)
    // first promise resolution is used to format the data.
    .then(res => {
      return res.json();
    })
    //what gets returned from the previous promise moves into the next promise
    .then(user => this.setState({users: user.data}))
    .catch(err => {
      console.log('Sorry, the API is currently down', err);
    })
  };

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        <UserCard user={this.state.users}/>
        {console.log(this.state.users)}
      </div>
    );
  }
}

export default App;
