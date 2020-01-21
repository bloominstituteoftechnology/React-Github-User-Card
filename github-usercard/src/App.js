import React from 'react';
import UserCard from "./components/UserCard"
import './App.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/dustinmyers')
    .then(res => res.json())
    .then(user => { console.log("USER", user); this.setState({user: user}) })
    .catch(err => console.log('Error fetching user.'));
  }

  render() {
    return (
      <div>
        <UserCard user={this.state.user} />
      </div>
    );
  }
}

export default App;
