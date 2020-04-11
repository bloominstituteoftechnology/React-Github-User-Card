import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import User from './components/User';
import Followers from './components/Followers';
import FollowerList from './components/FollowerList';

class App extends React.Component {
  constructor() {
    console.log('constructor is running');

    super();

    this.state = {
      user: [],
    }
  };

  componentDidMount() {
    console.log('componentDidMount');

    axios
    .get(`https://api.github.com/users/PL9627`)
    .then(res => res.json())
    .then(users => {
      console.log('User: ', users);

      this.setState({user: users.data})
    })
    .catch(err => console.log("error: ", err));
  };

  /* componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");

    console.log("prevProps:", prevProps);
    console.log("prevState:", prevState);
  } */

  /* fetchFollowers = e => {
    e.preventDefault();

    fetch(`https://api.github.com/users/PL9627/followers`)
    .then(res => res.json())
    .then(users => this.setState({user: users.}))
    .catch(err => console.log("FetchFollowers err", err))
  } */

render() {

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
  }
}

export default App;
