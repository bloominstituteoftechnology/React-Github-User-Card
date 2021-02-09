import React from "react";
import axios from "axios";
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      userData: [],
    }
  }

  componentDidMount(){
    axios
      .get("https://api.github.com/users/leon-nasswetter")
      .then(res => {
        console.log(res);
        console.log(res.data)
        this.setState({
          userData: res.data
          
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  

  render(){
    return(
      <div className="app">
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
