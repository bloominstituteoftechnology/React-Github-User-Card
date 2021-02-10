import React from "react";
import axios from "axios";
// import './App.css';

class App extends React.Component{
  state = {
    user: [],
    followers: []
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/Beau-Jennings")
    .then((res) => {
      console.log(res);
      this.setState({
        user: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });

    axios.get("https://api.github.com/users/Beau-Jennings/followers")
    .then((res) => {
      console.log(res);
      this.setState({
        followers: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
  };

  handleChanges = (e) => {
    this.setState({
      user: e.target.value,
    });
  };


  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.user.login}</h1>

        </header>
        <div className = "cardContainer">
          <img src= {this.state.user.avatar_url} key= {this.state.user.avatar_url} alt={this.state.user.avatar_url} />
        </div>

        <div className = "followerContainer">
          <h2></h2>
        </div>
      </div>
    );
  }
}


export default App;
