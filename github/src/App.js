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
    fetch(`https://api.github.com/users/vetorobert3`)
      .then(res => res.json())
      .then(persons => {
        console.log('fetch: person', persons)
        this.setState({...this.state, users: persons.message})
      })
      .catch((err) => {
        console.log(err)
      });
  }

  render() {
    return(
      <div>
        <h1>GitHub Users</h1>
        <UserCard users={this.state.login}/>
      </div>
    );
  }

}

export default App;
