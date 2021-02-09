import React from "react";
import axios from "axios";
// import './App.css';

class App extends React.Component{
  state = {
    user: [],
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/Beau-Jennings")
    .then((res) => {
      console.log(res);
      this.setState({
        user: res.data.login
      });
    })
    .catch(err => {
      console.log(err);
    });
  }

  handleChanges = (e) => {
    this.setState({
      user: e.target.value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    axios.get("https://api.github.com/users/Beau-Jennings")
    .then((res) => {
      console.log(res);
      this.setState({
        user: res.data.login
      })
    })
    .catch(err => {
      console.log(err);
    });
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.user}</h1>

        </header>
        <div className = "cardcontainer">
          <img src= "https://avatars.githubusercontent.com/u/73541042?v=4" key= {this.state.avatar_url} alt={this.state.user.avatar_url} />
        </div>
      </div>
    );
  }
}


export default App;
