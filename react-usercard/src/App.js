import React from 'react';
import './App.css';
import axios from "axios";
import MyCard from './Components/MyCard';
import Followers from "./Components/Followers";
import "./App.css";

class App extends React.Component {
  state = {
    myCard: [],
    followers: []
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/chelsabeth")
      .then(res => {
        this.setState({
          myCard: res.data
        });
        console.log("My Github data", this.state.myCard)
      })
      .catch(err => console.log(err));

      axios 
      .get("https://api.github.com/users/chelsabeth/followers")
      .then(res => {
        this.setState({
          followers: res.data
        });
        console.log("My Github followers data", this.state.followers)
      })
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div className="App">
        <h1>Welcome to the Github User Card App!</h1>
        <MyCard data={this.state.myCard} />
        <Followers follower={this.state.followers}/>
      </div>
    );
  }
}

export default App;
