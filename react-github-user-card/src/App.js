import React from 'react';
import axios from 'axios'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      profile: [],
      followers: []
    }
  }
  componentDidMount(){
    axios.get("https://api.github.com/users/joowoonk")
    .then(response => {
      console.log(response.data)
      this.setState({
        profile: response.data
      })
     })
    axios.get("https://api.github.com/users/joowoonk/followers")
    .then(response => {
      console.log("follwers",response.data)
      this.setState({
        followers: response.data
      })
    })
    .catch(error => {
      console.log("the data was not returned", error)
    })
  }
 
  
  render(){
      return (
        <div>
          <div className="card">
            <img src={this.state.profile.avatar_url} alt={this.state.profile.id} />
            <div className="card-info">
              <h3 className="name">{this.state.profile.name}</h3>
              <p className="username">{this.state.profile.login}</p>
              <p>Location: {this.state.profile.location}</p>
              <p>Profile:  
                <a href={this.state.profile.url}>{this.state.profile.url}</a>
              </p>
              <p>Followers: {this.state.profile.followers}</p>
              <p>Following: {this.state.profile.following}</p>
              <p>Bio: {this.state.profile.bio}</p>
            </div> 
          </div>
          <div>
          {this.state.followers.map(follower => (
                  <div className="card"> 
                  <img src={follower.avatar_url} alt={follower.id} />
                  <h3 className="name">{follower.login}</h3>
                   
                  </div>
                ))}
        </div>
      </div>

      )}
}

export default App;
