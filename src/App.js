import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    console.log('constructor is running');

    super();

    this.state = {
      user: [],
      userText: ""
    }
  }

  componentDidMount() {
    console.log('componentDidMount');

    fetch(`https://api.github.com/users/PL9627`)
    .then(res => res.json())
    .then(users => {
      console.log('User: ', users);

      this.setState({user: users.avatar_url})
    })
    .catch(err => console.log("error: ", err));
  }

render() {

  return (
    <div className="App">
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
}

export default App;
