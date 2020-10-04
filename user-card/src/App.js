import React from 'react';
import axios from "axios";
import './App.css';

class App extends React.Component {
  constructor(){
    console.log("Constructor Invoked");
    super();
    this.state = {
      users: [],
      followers: []
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



  render() {
    console.log("Render Invoked");
    return (
      <div className="App">
        <h1>Github User {this.state.users.name}</h1>
        <h2>User Name: {this.state.users.login}</h2>
        <img src={this.state.users.avatar_url} alt="" />
        <p>{this.state.users.bio}</p>
      <div className="link">
        <p>Follow Me:</p>
        <a href="githublink">{this.state.users.html_url}</a>
      </div>
      <div className="Followers">
       {this.state.followers.map((follower) => (
         <div className="followers-info">
         <img src={follower.avatar_url} className="followersImg" alt="" />
          <h2>{follower.login}</h2>
          <a href="followersLink"> {follower.html_url}</a>

         </div>
      ))}
      
        

      </div>
      </div>
    )
  }
}

export default App;
