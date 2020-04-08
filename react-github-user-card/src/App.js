import React from 'react';
import axios from 'axios';

import './App.css';

const tok = 'joowoonk:1b02135b5c1878cc2cd1a6443d2fa9284eab7171';
const hash = btoa(tok);
const Basic = 'Basic ' + hash;
var config = {headers: {'Authorization': Basic  }} 

// 1b02135b5c1878cc2cd1a6443d2fa9284eab7171

let followersArray = ["freedomwriter", "nataliastewart", "devjaymoe","Diddleslip","Riley-Robinson"];




class App extends React.Component {
  constructor(){
    super();
    this.state = {
      profile: [],
      followers: [],
      follower:[]
    }
  }

    componentDidMount(){
      axios.get("https://api.github.com/users/joowoonk", config)
      .then(response => {
        console.log(response.data)
        this.setState({
          profile: response.data
        })
      })
      axios.get("https://api.github.com/users/joowoonk/followers", config)
      .then(response => {
        console.log("follwers",response.data)
        this.setState({
          followers: response.data
        })
      })
      // .then((props)=> {
      //   console.log(props)
    
      // })
      .catch(error => {
        console.log("the data was not returned", error)
      })
    }

   
  
  render(){
    // console.log("fetchfollower", fetchfollower)
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
          <h2 className="followers">Followers:</h2>
          
          <div className="followerContainer"> 
          {this.state.followers.map(follower => (
                 <div>
                 <h3 className="name">{follower.login.toUpperCase()}</h3>
                  <img classsName="image" src={follower.avatar_url} alt={follower.id} />
            
                  </div>
           
                ))}
          
        </div>
      </div>

      )}
}

export default App;
