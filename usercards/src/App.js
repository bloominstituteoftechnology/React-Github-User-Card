import React from 'react';
import './App.css';
import Header from './compnents/Header';
import User from './compnents/User';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      githubUser: []
    };
  }
  componentDidMount() {
    fetch('https://api.github.com/users/JenVest2020')
      .then(response => response.json())
      .then(data => console.log('from CDM', data))
    // .then(user => this.setState({ githubUser: user.res }))
  }
  render() {
    return (
      <div className='App-header'>
        <Header />
        <User />
      </div>
    );
  }
};

export default App;
