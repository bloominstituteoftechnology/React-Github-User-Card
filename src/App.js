import React from 'react'
import './App.css'
import axios from 'axios'

import UserCard from './components/userCard'

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      userData: []
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/erikscow')
      .then(res => {
        console.log(res)
        this.setState({
          userData: res.data
        })
      })
      .catch(err => console.log('Something went wrong in the API call: ', err))
  }

  render(){
    return (
      <div className='App'>
        <UserCard userData={this.state.userData} />
      </div>
    )
  }

}

export default App;
