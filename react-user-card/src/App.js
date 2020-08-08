import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      username: ''
    }
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/noahn84')
      .then((res) => {
        this.setState({ users: res.data });
        console.log(this.state);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidUpdate(prevState, prevProps) {
    if (prevState.users !== this.state.users) {
      console.log('users have changed!');
    }
    if (prevState.username !== this.state.username) {
      console.log('state updated, user:', this.state.username);
    }
  };

  fetchUser = () => {
    axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then((res) => {
        this.setState({ users: res.data });
        console.log(this.state);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChanges = (e) => {
    this.setState({
      ...this.state,
      username: e.target.value
    });
  };

  render() {
    return (
      <div className='App'>
        <h1>Github Users</h1>
        <input
          className='username-input'
          type='text'
          value={this.state.username}
          onChange={this.handleChanges}
        />
        <button onClick={this.fetchUser}>Find User</button>
        <div className='user-card'>
          <img width='150' height='150' src={this.state.users.avatar_url} alt='profile picture'/>
          <div className='user-info'>
            <p>Bio: {this.state.users.bio}</p>
            <p>Followers: {this.state.users.followers}</p>
            <p>Following: {this.state.users.following}</p>
            <a href={this.state.users.html_url}>{this.state.users.name}'s Profile</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
