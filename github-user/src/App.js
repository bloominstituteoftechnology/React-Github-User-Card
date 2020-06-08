import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/Github-Card";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userCard: [],
      followers: []
    }
  }

  componentDidMount() {
    axios.get("https://api.github.com/Kat2bk/")
    .then(response => {
      this.setState({
        userCard: [{
          img: response.data.avatar_url
        }]
      })
    })
    .catch(error => console.log("Sorry, something happened!", error));
  }

render() {
  return (
    <div className="App">
      <div className="container">
        <h1>Github Users!</h1>
      </div>
    </div>
  );
}
}

export default App