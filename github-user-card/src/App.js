import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Card from './components/CardList';

export default class App extends Component() {

  constructor(){
    super()
    this.state = {
      user: 'Regbmiller',
      data: []
    }
  }

  fetchData = (user) => {
    axios.get(`https://api.github.com/users/${user}`)
    .then(res => {
      console.log(res.data)
      this.setState({
        data: res.data
      })
    })
    
  }

  componentDidMount(){
    this.fetchData(this.state.user)
  }

  render() {
    return (
      <div className="card-container">
        <Card info={this.state.data}/>
      </div>
    )
  }
}

