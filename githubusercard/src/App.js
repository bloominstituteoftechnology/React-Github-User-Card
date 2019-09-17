import React from 'react';
import users from './components/users';
import userCard from './components/usercard';
import './App.css';

class App extends React.Component {
  constructor() {
    console.log("Constructor Invoked");
    super();
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    console.log("CDM Invoked!");
    this.setState({ users: users })
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to Github User Card!</h1>
        </div>{this.state.users.map(user => (
          <div key={user.id}>
            {user.first_name + user.email}
        ))}
      </div>
    ); 
  }
}

export default App;
