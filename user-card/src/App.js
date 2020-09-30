import React from 'react';
import logo from './logo.svg';
import './App.css';

import User from "./components/User";

class App extends React.Component {
  state = {
    user: [],
    followers: [],
  };

componentDidMount() {
  this.fetchUsers(this.state.user);
  this.fetchFollowers(this.state.followers);
}

componentDidUpdate(prevProps, prevState) {
  if (prevState.user !== this.state.user) {
}

handleUserChange = (e) => {
  this.setState({
    user: e.target.value
  });
};

handleSearch = (e) => {
  e.preventDefault();
  this.fetchUsers(this.state.user);
};

fetchUsers = (user) => {
  fetch(`https://api.github.com/users/`)
  .then((res) => res.json())
  .then((data) => {
    this.setState({
      user: data.message
    });
  })
  .catch((err) => console.log("error: ", err));
};

fetchFollowers = (followers) => {
  fetch(`https://api.github.com/users/simonesquad/followers`)
  .then((res) => res.json())
  .then((data) => {
    this.setState({
      followers: data.message
    });
  })
  .catch((err) => console.log("error: ", err));
};

this.render() {
  return (
    <div className="User App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
