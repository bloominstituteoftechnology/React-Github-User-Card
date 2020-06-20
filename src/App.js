import React from 'react';
//import logo from './logo.svg';
import githublogo from './githublogo.svg'
import UserCard from './components/userCard.js';
import Followers from './components/follower.js';
import ErrorPage from './components/errorPage.js';
import Navbar from './components/navbar.js';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      followers: [],
      input: '',
      submit: '',
      userExists: null,
      darkMode: this.getInitialMode()
    }

    this.fetchUsersandFollowers= this.fetchUsersandFollowers.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleExistence = this.handleExistence.bind(this);
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
    this.getInitialMode = this.getInitialMode.bind(this);
    this.getPrefColorScheme = this.getPrefColorScheme.bind(this);
  }

  /*componentWillMount() {
    fetch('https://api.github.com/users/{this.state.submit}')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({
        user: data
      });
    }).catch(error => {console.log(error)});

    fetch(`https://api.github.com/users/{this.state.submit}/followers`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data instanceof Array) {
        this.setState({
          followers: data
        });
      }
      
    }).catch(error => {console.log(error)});
  }*/

  fetchUsersandFollowers() {
    fetch('https://api.github.com/users/{this.state.submit}')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({
        user: data
      });
    }).catch(error => {console.log(error)});

    fetch(`https://api.github.com/users/{this.state.submit}/followers`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data instanceof Array) {
        this.setState({
          followers: data
        });
      }
      
    }).catch(error => {console.log(error)});

  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(state => ({
      submit: state.input
    }));
  }

  handleExistence() {
    if (this.state.submit === this.state.user.login) {
      this.setState({
        userExists: true
      });
    }
    else {
      this.setState({
        userExists: false
      });
    }
  }

  toggleDarkMode() {
    this.setState ({
      darkMode: !this.state.darkMode
    });
  }

  componentDidUpdate() {
    this.fetchUsersandFollowers()
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

    const renderFollowers = this.state.followers.map((follower) => <Followers 
          avatar= {follower.avatar_url} 
          username= {follower.login}
          id= {follower.id}
          githubLink= {follower.html_url}
          darkMode= {this.state.darkMode}
        />);

    return (
      <div> 
        <Navbar darkMode={this.state.darkMode} darkModeToggle={this.toggleDarkMode} /> 
        <div className= {this.state.darkMode ? 'App-dark' : 'App-light'}>
          <header className={this.state.darkMode ? 'Page-header-dark' : 'Page-header-light'}>
            <img src={githublogo} className={this.state.darkMode ? 'App-logo-inverted' : 'App-logo-light'} alt="logo" />
            <h1>Welcome to Github UserCard Generator</h1>
            <form onSubmit={this.handleSubmit} className={this.state.darkMode ? 'home-form-dark' : 'home-form-light'} >
              <input type="text" value={this.state.input} onChange={this.handleChange} placeholder="Github Username" />
              <button type="submit" onClick={this.handleExistence}>Generate User Card</button>
            </form>
          </header>
        </div>
        {this.state.userExists ? 
          <div>
            <UserCard
              avatar={this.state.user.avatar_url}
              name={this.state.user.name}
              username={this.state.user.login}
              location={this.state.user.location}
              publicRepos={this.state.user.public_repos}
              following={this.state.user.following}
              followers={this.state.user.followers}
              githubLink={this.state.user.html_url}
              darkMode={this.state.darkMode} 
            />
            {renderFollowers} 
          </div> : <ErrorPage darkMode={this.state.darkMode}/>}
        </div>
    
  );

  }
}

export default App;