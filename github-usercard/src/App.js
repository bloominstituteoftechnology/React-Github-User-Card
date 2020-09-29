import React from 'react';
import './App.css';
import axios from 'axios';
import FollowersList from './components/FollowersList'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {login: '', avatar_url: ''},
      userText: "",
      followers: []
    };
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/corakrynick')
    .then(res => {
      console.log(res.data)
      this.setState({
        user: res.data
      });
    })
    .catch(err => console.log(err));
  }
  handleChanges = e => {
    const { value } = e.target;
    this.setState({
      userText: value
    });
  };

  getFollowers = e => {
    e.preventDefault()
    axios.get('https://api.github.com/users/corakrynick/followers')
    .then(res => {
      console.log(res.data)
      this.setState({
        followers: res.data
      });
    })
    .catch(err => console.log(err));
  }
  
  render() {
    return (
      <div className="App">
        <header>
          <h1>Github Users</h1>
        </header>
        <button onClick={this.getFollowers}>Get Followers</button>
        <div className="users">
            <img src={this.state.user.avatar_url} alt="user"/>
            <p>{this.state.user.login}</p> 
         </div>
         <FollowersList followers={this.state.followers}/>
      </div>
    )
  }
}

export default App;