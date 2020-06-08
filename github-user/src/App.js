import React, {Component} from 'react';
import './App.css';
import Card from "./components/Github-Card";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/Kat2bk/`)
    .then(response => {
      console.log(response);
      this.setState({ users: response.data })
    })
    .catch(error => console.log("sorry! Can't do that!", error));
  }

render() {
  return (
    <div className="App">
      <div className="container">
        <h1>Github Users!</h1>
        <Card userCard={this.state.users} />
      </div>
    </div>
  );
}
}

export default App