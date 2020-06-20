import React from 'react';
import githublogo from './githublogo.svg';
import Navbar from './components/Navbar';
import CardList from './components/CardList';
import './App.css';

const { useState } = React;
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: [],
      darkMode: this.getInitialMode()
    }
    this.addNewCard = this.addNewCard.bind(this);
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
    this.getInitialMode = this.getInitialMode.bind(this);
    this.getPrefColorScheme = this.getPrefColorScheme.bind(this);
  }

  addNewCard(userCardInfo) {
    this.setState((state) => {
      return {userData: state.userData.concat(userCardInfo)}
    });
  }

  toggleDarkMode() {
    this.setState ({
      darkMode: !this.state.darkMode
    });
  }

  componentDidUpdate() {
    localStorage.setItem('dark', JSON.stringify(this.state.darkMode));
  }

  getInitialMode() {
    const isReturningUser = 'dark' in localStorage;
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    const userPrefersDark = this.getPrefColorScheme;
    //if preferred color scheme was saved -> dark / light
    if (isReturningUser) {
      return savedMode;
    }
    //if preferred color scheme is dark -> dark
    else if (userPrefersDark) {
      return true;
    } 
    
    //else -> light
    else {
      return false;
    }

    //return savedMode; 
  }


  getPrefColorScheme() {
    if (!window.matchMedia) return;

    else {
      return window.matchMedia('(prefers-color-scheme: dark)');
    }
  }

  render() {
    return(
      <div>
        <Navbar darkMode={this.state.darkMode} darkModeToggle={this.toggleDarkMode} /> 
        <div className= {this.state.darkMode ? 'App-dark' : 'App-light'}>
          <header className={this.state.darkMode ? 'Page-header-dark' : 'Page-header-light'}>
            <img src={githublogo} className={this.state.darkMode ? 'App-logo-inverted' : 'App-logo-light'} alt="logo" />
            <h1>Welcome to Github UserCard Generator</h1>
            <p style={{fontSize: '0.8em'}}><em>Find and get access to any GitHub user by generating their user card on entering their username</em></p>
            <Form onSubmit={this.addNewCard} darkMode={this.state.darkMode} />
          </header>
          <CardList cards={this.state.userData} darkMode={this.state.darkMode} />
        </div>
      </div>
    );
  } 
}

const Form = props => {
  const [username, setUsername] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    axios
      .get(`https://api.github.com/users/${username}`)
      .then(resp => {
        props.onSubmit(resp.data)
        setUsername('')
      })
  }
  
  return (
    <form onSubmit={handleSubmit} className={props.darkMode ? 'home-form-dark' : 'home-form-light'}>
      <input
        type="text"
        value={username}
        onChange={event => setUsername(event.target.value)}
        placeholder="GitHub username"
        required
      />
      <button type="submit">Generate User card</button>
    </form>
  )
}

export default App;
