import React from 'react';
import users from './components/users';
import UserCard, {user} from './components/usercard';
import './App.css';

class App extends React.Component {
  constructor() {
    console.log("Constructor Invoked");
    super();
    this.state = {
      people: {},
      followers: []
    };
  }
  componentDidMount() {
    console.log("Component mounted!!!")
    fetch('https://api.github.com/users/shgradyy')
    .then(res => res.json())
    .then(res => this.setState({people: res}))
    .catch(err => console.log(err));

    fetch('https://api.github.com/users/shgradyy/followers')
    .then(res => res.json())
    .then(res => this.setState({followers: res}))
    .catch(err => console.log(err))
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
