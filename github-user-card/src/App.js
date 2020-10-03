import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: []
    }
  }

  componentDidMount() {
    console.log('CDM invoked')
    axios
      .get("https://api.github.com/users/tbbcoach")
      .then((res) => {
        console.log(res);
        this.setState({ user: res.data })
      })
      .catch((err) => console.log("error", err));
  

    axios
      .get("https://api.github.com/users/tbbcoach/followers")
      .then((res) => {
        console.log(res);
        this.setState({ followers: res.data })
      })
      .catch((err) => console.log('error', err));
  }

  componentDidUpdate(prevState, prevProps) {
    if (prevState.user !== this.state.user) {
      console.log('CDU invoked')
    }
  }

  render() {
    console.log('render invoked')
    return (
      <div className="app">
        <h1>GIT HUB USER</h1>
        <div>
          <h2>{this.state.user.name}</h2>
          <img className="pic" src={this.state.user.avatar_url} alt="user" />
          <h3>User name: {this.state.user.login}</h3>
          <h4>Location: {this.state.user.location}</h4>
          <p>Bio: {this.state.user.bio}</p>
        </div>
        <h1>GIT HUB FOLLOWERS</h1>
        <div>
          {this.state.followers.map((follower) => (
            <p>Name - {follower.login}
            <img src={follower.avatar_url} alt='follower' />
            </p>  
    ))}
        </div>
      </div>
    );

  
  }
}

  
export default App;