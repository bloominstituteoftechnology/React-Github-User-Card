import React from 'react';
import users from './components/users';
import UserCard, {user} from './components/usercard';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    console.log("Constructor Invoked");
    super();
    this.state = {
      user: []
    };
  }
  componentDidMount() {
    axios.get(`https://api.github.com/users/shgradyy`)
      .then(res => {
        const user = res.data;
        this.setState({ user });
      })
  }
  render() {
    return (
      <div className="App">
        <h1>Welcome to Github User Card!</h1>
        <UserCard {this.state.users.map(user => (
          <div key={user.name}>
          {user.name + user.email}
          </div>
        ))
        
      <div>
    ); 
  }
}

export default App;
