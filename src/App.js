import React from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      user:{},
      followers:[],
      following:[] 
    }
  }

  componentDidMount(){
    axios
      .get('https://api.github.com/users/Jet110390')
      .then(res=>this.setState({user:res.data}))
      .catch(err=>console.log(err));

    axios
      .get('https://api.github.com/users/Jet110390/followers')
      .then(res=>res.data.map(follower=>
        axios
          .get(follower.url)
          .then(res=>this.setState({...this.state.followers.push(res.data)}))
          .catch(err=>console.log(err))
      ))
      .catch(err=>console.log(err));

    axios
      .get('https://api.github.com/users/Jet110390/following')
      .then(res=>res.data.map(following=>
        axios
          .get(following.url)
          .then(res=>this.setState({...this.state.following.push(res.data)}))
          .catch(err=>console.log(err))
      ))
      .catch(err=>console.log(err));
  }

  render(){
    // console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className='animation head'>{this.state.user.name}'s GitHub</h1>
          <div className='card'>
            <img className='profilePic' src={this.state.user.avatar_url} alt={this.state.user.login}/>
            <h3>{this.state.user.name}</h3>
            <p>{this.state.user.login}</p>
            <p>Location: {this.state.user.location}</p>
            <span>Profile: <a href={this.state.user.html_url}>{this.state.user.html_url}</a></span> 
            <p>Followers: {this.state.user.followers}</p>
            <p>Following: {this.state.user.following}</p>
            <p>Bio: {this.state.user.bio}</p>
          </div>
          <h2>Followers</h2>
          {this.state.followers.map(follower=>
          <div className='card' key={follower.id}>
            <img className='profilePic' src={follower.avatar_url} alt={follower.login}/>
            <h3>{follower.name}</h3>
            <p>{follower.login}</p>
            <p>Location: {follower.location}</p>
            <p>Profile: <a href={follower.html_url}>{follower.html_url}</a></p> 
            <p>Followers: {follower.followers}</p>
            <p>Following: {follower.following}</p>
            <p>Bio: {follower.bio}</p>
          </div>
          )}
          <h2>Following</h2>
          {this.state.following.map(following=>
            <div className='card' key={following.id}>
              <img className='profilePic' src={following.avatar_url} alt={following.login}/>
              <h3>{following.name}</h3>
              <p>{following.login}</p>
              <p>Location: {following.location}</p>
              <p>Profile: <a href={following.html_url}>{following.html_url}</a></p> 
              <p>Followers: {following.followers}</p>
              <p>Following: {following.following}</p>
              <p>Bio: {following.bio}</p>
            </div>
          )}
        </header>
      </div>
    );
  }
}

export default App;


