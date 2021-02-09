import React from "react";
import axios from "axios";
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      userData: [],
      followers: [],
    }
  }

  componentDidMount(){
    axios
      .get("https://api.github.com/users/leon-nasswetter")
      .then(res => {
        this.setState({
          userData: res.data
          
        })
      })
      .catch(err => {
        console.log(err);
      })


      axios
        .get("https://api.github.com/users/leon-nasswetter/followers")
        .then(res => {
          this.setState({
            followers: res.data
            
          })
          
        })
        .catch(err => {
          console.log(err);
        })
  }

  

  render(){
    return(
      <div className="App">
        <h1>User Card App</h1>
        <div className="userCard">
          <img src={this.state.userData.avatar_url} />
          <div>{this.state.userData.name}</div>
          <div>{this.state.userData.location}</div>
          <div>Has {this.state.userData.public_repos} Public Repos</div>
        </div>
      </div>
    )
  }
}

export default App;
