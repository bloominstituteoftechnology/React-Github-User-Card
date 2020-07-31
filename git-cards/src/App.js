import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './components/User-Card';

class App extends Component {
  constructor() {
    super();
    this.state = {
      myData: []
    };
  }
  componentDidMount() {


    axios.get('https://api.github.com/users/chandlerben')
      .then(res => { this.setState({ myData: res.data }); console.log(this.state.myData) })
  }
  render() {
    return (
      <div className="App" >

        <UserCard userData={this.state.myData} />
      </div>
    );
  }
}

export default App;
