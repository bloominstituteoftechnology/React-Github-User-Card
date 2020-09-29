import React from 'react';
import './App.css';
import UserCards from './Components/UserCards'
import axios from 'axios'

class App extends React.Component {

  state = {
    users: []
  }

  componentDidMount(){ // it gets called only ONCE after the first run on render()
    axios
      .get('https://api.github.com/users/sunkist5691/followers')
      .then(response => {

        const followersArray=[]

        response.data.forEach( userName => {
          followersArray.push(userName.login)
        })

        followersArray.forEach( userName => {
          axios
            .get(`https://api.github.com/users/${userName}`)
            .then( response => {
              this.setState({
                ...this.state,
                users: [...this.state.users, response.data]
              })
            })
        })

      })
  }

  render(){

    return (
      <div className="app">
        <h1>Github Users</h1>
        {
          this.state.users.length > 0 
          ? 
          <UserCards cards={this.state.users}/> 
          : 
          <h2>Loading....</h2>
        }
      </div>
    )

  }
}

export default App;
