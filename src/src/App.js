import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

import UserList from './components/UserList'

export default class App extends Component {
  constructor(p) {
    super(p)
    this.state = {
      userData: []
    }
  }
  componentDidMount() {
    axios
        .get('https://api.github.com/users/xenocide21')
        .then(r => {
          this.setState(()=>({userData: r.data}))
          console.log(r, 'This is the API Response')
          console.log (this.state.userData, 'This is the data in State')
        })
        .catch(err => {
          console.log('The data returned with an error.', err)
        })
  }


  render() {

    return (
        <div className="App">
            <UserList users={this.state.userData}/>
        </div>
    )
  }
}