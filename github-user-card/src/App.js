import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: 'TreyMcGarity'
    }
  }
  
  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
      axios.get(`https://api.github.com/users/${this.state.user}`)
      .then(response => {
        console.log(response.data);
        this.setState({
          user: response.data
        })
      })
      .catch(error => {
        console.log('Data was not returned', error)
      })
  }

  render() {
    return(
      <div className="main-content">
        <h1>App</h1>
        <div className="user-content">
          <h3>{this.state.user.name}</h3>
          <p>{this.state.user.bio}</p>
          <img className="user-img" src={this.state.user.avatar_url} alt="user's avatar"/>
        </div>
      </div>
    )
  }
}

export default App;
