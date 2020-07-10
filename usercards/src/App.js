import React from 'react';
import './App.css';
import Header from './compnents/Header';
import User from './compnents/User';
import Followers from './compnents/Followers';

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
      .then(user => {
        this.setState({ githubUser: user })
        console.log('from CDM', user)
      })


  }
  render() {
    return (
      <div className='App-header'>
        <Header />
        <User userInfo={this.state.githubUser} />
        {/* <Followers /> */}
      </div>
    );
  }
};

export default App;
