import React from 'react';

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
    fetch(`https://api.github.com/users/vetorobert3/followers`)
      .then(res => res.json())
      .then(user => {
        this.setState({users: user})
      })
      .catch((err) => {
        console.log(err)
      });
  }

  render() {
    return(
      <div>
        <h1>GitHub Users</h1>
        {this.state.users.map(users => {
          return <UserCard users={users} key={users.id} />
        })}
      </div>
    );
  }

}

export default App;
