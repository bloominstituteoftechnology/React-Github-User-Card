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
    console.log("CDM Invoked!");
    this.setState({ user: userCard })
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to Github User Card!</h1>
       
      </div>
    ); 
  }
}

export default App;
