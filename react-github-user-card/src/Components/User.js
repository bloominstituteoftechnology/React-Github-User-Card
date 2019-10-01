import React from 'react';
import axios from 'axios'
import ProfileCards from './ProfileCards'
import Followers from './Followers'

class User extends React.Component{

// CREATE STATE WITH THE USER AND THEIR INFORMATION
  constructor(){
    super();
    this.state = {
      user: 'JameaKidrick',
      userInfo: [],
      followerArray: [],
      userFollowers: '',
      followerInfo: []
    }
  }

  // USE COMPONENTDIDMOUNT (SIMILAR TO USEEFFECT) TO SEND AXIOS REQUEST FOR USER INFORMATION
  // SET USERINFORMATION BASED ON DATA RECEIVED FROM RESPONSE
  componentDidMount(){
    axios
    .get(`https://api.github.com/users/${this.state.user}`)
    .then(response => {
      console.log('userInfo', response.data)
      this.setState({
        userInfo: response.data
      })
    })
    .catch(error => {
      console.log('Error', error)
    })

    for(let i = 0; i < 5; i++){
      // SET UP SECOND AXIOS TO GET FOLLOWER LOGIN RANDOMLY THEN USE ANOTHER AXIOS CALL TO GET THEIR INFORMATION
      axios
      .get(`https://api.github.com/users/${this.state.user}/followers`)
      .then(response => {
        // console.log('userFollowers', response.data)
        let n = Math.floor(Math.random()*response.data.length-1)
        this.setState({
          // userFollowers: response.data[n].login,
          followerArray: this.state.followerArray.concat(response.data[n].login)
        })
      })
      .catch(error => {
        console.log('Error', error)
      })
    }

    // this.state.followerArray.forEach(item => {
    //   axios
    //   .get(`https://api.github.com/users/${item}`)
    //   .then(response => {
    //     console.log('RESPONSE', response)
    //     this.setState({
    //       followerInfo: response.data
    //     })
    //   })
    // })
  }
  

  // SEND USERINFO TO PROFILE CARDS AS PROPS
  render() {
    console.log('followerArray', this.state.followerArray)
    return(
      <div>
        <ProfileCards 
        info={this.state.userInfo} 
        followerInfo={this.state.followerInfo}
        />

      </div>
    )
  }
}

export default User;