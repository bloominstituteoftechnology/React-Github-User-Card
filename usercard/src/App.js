import React, {Component} from 'react';
import './App.css';
import UserCard from './components/usercard';
import axios from 'axios';

class App extends Component {

  constructor (){
    super()
    this.state = {
      name: '',
      email: '',
      login: '',
      avatar: '',
      followers: []


    }

  }

  componentDidMount (){
    axios.get('https://api.github.com/users/dijahdeen')
        .then (response => { 
          // console.log (response.data.name)

          this.setState ({
            name: response.data.name,
            email: response.data.email,
            login: response.data.login,
            avatar: response.data.avatar_url
          })

        })
     axios.get('https://api.github.com/users/dijahdeen/followers')
        .then (response => {  
          console.log(response)
          
        this.setState ({
          followers: response.data
        })  
      })
  }

  render() {
    return(
     
      <div className = 'App'>
         {this.state.followers.map(followme => {
           return (
             
             <div className = 'followers'> 
              <img src = {followme.avatar_url} />
              <div className = 'followersinfo'>
                <p>{followme.name}</p>
                <p>USERNAME: {followme.login}</p>
                {/* <p>{followme.email}</p> */}
                <p> Here is my github url so you know where to find me! </p>
                <p>{followme.html_url}</p>
              </div>
               
             </div>
             
           )
         }
          )}

        {console.log(this.state) }
          <UserCard 
          name = {this.state.name}
          email = {this.state.email}
          login = {this.state.login}
          avatar = {this.state.avatar}
          />
      </div>
    )
  }
}
export default App;
