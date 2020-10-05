import React from 'react';
import axios from "axios";
import Heart from "./heart.png"
import './App.css';

class App extends React.Component {
  constructor(){
    console.log("Constructor Invoked");
    super();
    this.state = {
      users: [],
      followers: [],
      findUsers: ""
    }
  }
  
  componentDidMount() {
    console.log("CDM Invoked");
    axios
      .get("https://api.github.com/users/dgarcialambda")
      .then((res) => {
        console.log(res);
        this.setState({users: res.data})
      })
      .catch((err) => console.log(err, 'Caught an Error'))

      axios
        .get(" https://api.github.com/users/dgarcialambda/followers")
        .then((res) => {
          console.log(res);
          this.setState({ followers: res.data})
        })
  }

  handleChanges = e => {
    console.log(e.target.value);
    this.setState({
      findUsers: e.target.value
    });
  }
  render() {
    console.log("Render Invoked");
    return (
      <div className="App">
      <div className="githubImg"> <img src={Heart} alt="" />
      <h1>GitHub User List</h1>
      </div>
        
      <div className="userInfo">
        <img src={this.state.users.avatar_url}  alt="" />
      <div className="userProfile">
        <h1>Github User: {this.state.users.name}</h1>
        <h2>User Name: {this.state.users.login}</h2>
     <div className="userLink">
        <h3>Followers: {this.state.users.followers}</h3>
        <h3>Following: {this.state.users.following}</h3>
      </div>
        <p>{this.state.users.bio}</p>
        <a href="https://github.com/dgarcialambda">Follow Me: {this.state.users.html_url}</a>
      </div>
      </div>
      
      <div className="Followers">
       {this.state.followers.map((follower) => (
         <div className="followersInfo">
            <img src={follower.avatar_url} className="followersImg" alt="" />
            <div className="followersProfile">
            <h2>Github User: {follower.login}</h2>
            <a href="html_url">{follower.html_url} </a> 
          </div>
          </div>
          ))}
          </div>
          </div>
    )
  }
}

export default App;
