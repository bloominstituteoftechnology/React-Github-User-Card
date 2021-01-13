import axios from 'axios'
import React, { Component } from 'react'
import '../App.css'


export default class users extends Component {
    state = {
        followers: [],
        username: '',
        name: '',
        avatar: ''
    }
  
componentDidMount()  {axios.get('https://api.github.com/users/SamSin369')
.then((res) => {
    console.log(res)
    this.setState({username: res.data.login, avatar: res.data.avatar_url, name: res.data.name})
    console.log(this.state.username)
})
.catch((err) => {
    console.log(err)
})
axios.get('https://api.github.com/users/SamSin369/followers')
.then((res) => {
    this.setState({followers: [res.data[0]]})
    console.log(this.state.followers)
})
.catch((err) => {
    console.log(err)
})
}
    render() {
        // {console.log(this.state.allUsers)}
        return (
            <>
            <div className="card">
            <div className="card-container">
            <img className="card-image" src={this.state.avatar} alt='samson' />
            </div>
            <div className="card-header">
                {this.state.username}
            </div>
            <div className="card-text">
                {this.state.name}
            </div>
            
        </div> 
           
            {this.state.followers.map((item) => {
               return(      <div className="card">
               <div className="card-container">
               <img className="card-image" src={item.avatar_url} alt='samson' />
               </div>
               <div className="card-header">
                   
                   {item.login}
               </div>
               <div className="card-text">
                   {item.type}
               </div>
               
           </div> )
          
            })}
            </>
         
           
           
        )
    }
}
