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
    fetch(`https://api.github.com/users`)
      .then(res => res.json())
      .then(user => {
        console.log(user);
        // const userArray = user.map(u => {
        //   return user;
        // })
        this.setState({users: user})
      })
      .catch((err) => {
        console.log(err)
      });

      console.log(this.state.users)
  }

  render() {
    return(
      <div>
        <h1>GitHub Users</h1>
        {this.state.users.map(users => {
          return <UserCard users={users} /> 
        })}
      </div>
    );
  }

}

export default App;
