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

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        <UserCard/>
      </div>
    );
  }
}

export default App;
