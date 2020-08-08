import React from 'react';
import axios from 'axios';
import './App.css';


class App extends React.Component {
  constructor() {
    console.log("Constructor")
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    console.log("CDM running")
    axios
    .get('https://api.github.com/users/lizhagag')
    .then((res) => {
      this.setState({users: res.data});
      console.log(this.state)
    })
    .catch((err)=> console.log('Axios Err', err))
  }

  render () {
    return (
      <div>
        <div>
          <img width='150' height='150' src={this.state.users.avatar_url} alt='profile picture'/>
          <div>
            <p>Bio: {this.state.users.bio}</p>
            <p>Followers: {this.state.users.followers}</p>
            <p>Following: {this.state.users.following}</p>
            <a href={this.state.users.html_url}>{this.state.users.name}Visit Their Profile!</a>
          </div>
        </div>
      </div>
      );
  }
 
}

export default App;
