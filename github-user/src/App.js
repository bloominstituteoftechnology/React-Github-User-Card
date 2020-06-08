import React, {Component} from 'react';
import './App.css';
import Card from "./components/Github-Card";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.username}`)
    .then(response => {
      console.log(response);
      this.setState({ user: response.data })
      .catch(error => console.log("sorry! Can't do that!", error));
    })
    axios.get(`https://api.github.com/users/${this.state.username}/followers`)
    .then(response => this.setState({ followers: response.data}));
  }

render() {
  return (
    <div className="App">
      <div className="container">
        <h1>Github Users!</h1>
        <Card followers={this.state.followers} user={this.state.user} />
      </div>
    </div>
  );
}
}

export default App