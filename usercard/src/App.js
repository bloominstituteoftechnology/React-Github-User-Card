import React from 'react';
import axios from 'axios';
import Followers from './Followers';
import User from './User';
import lambdalogo from './assets/lambdalogo.png'
import githublogo from './assets/githublogo.png'
import './App.css';

class App extends React.Component {
  state = {
    user: [],
    followers: []    
  }

componentDidMount() {
  axios.get(`https://api.github.com/users/mzteepowell`)
    .then(res => {
      this.setState({
          user: res.data
        })
      })
      .catch(err => {
          console.log(err);
      })
      axios.get(`https://api.github.com/users/mzteepowell/followers`)
    .then(res => {
      this.setState({
          followers: res.data
        })
      })
      .catch(err => {
          console.log(err);
      })
  }


render() {
  return(
    <div className='container'>
      <div className='header'>
      <img src={lambdalogo} alt="Lambda Logo"></img>
      <p>❤️'s</p>
      <img src={githublogo} alt="GitHub Logo"></img>
      </div>
        <User key={this.state.user.id} user={this.state.user} />
        <Followers key={this.state.followers.id}followers={this.state.followers}/>
    </div>
    )    
  }
}

export default App;
