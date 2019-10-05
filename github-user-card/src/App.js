import React, { Component } from 'react'
import axios from 'axios'
import Followers from './Followers'



export default class App extends Component {
  
constructor() {
  super()
  this.state = {
    followers: []
  
    
  }
}

componentDidMount() {
  this.fetchUsers()
 
}

// componentDidUpdate(prevProps,prevState) {
//   if(prevState.followers !==this.state.followers) {
//     this.setState({
//       images:[]
//     })
//   }

//   this.fetchUsers()
// }


fetchUsers = () => {
  axios.get('https://api.github.com/users/Reticent93/followers')
  .then(res => {
   this.setState({
     followers: res.data
   })
  })
  .catch(err => {
    console.log(err.res)
  })
}


  render() {
    
    return (
      <>
      {this.state.followers.map((item, index) => (
        <Followers key={index} login={item.login} url={item.avatar_url} followers={item.followers_url} />
      ))}
       
      </>
  
    
         )
         }
}
