import React from 'react';
import axios from 'axios';
import UserCard from './UserCard'
import Followers from './Followers'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      user: [],
      followers: []
    }
  }

 

  componentDidMount() {

    axios.get('https://api.github.com/users/timotheemcdonald')
    .then(value => {
      console.log('get request working')
      this.setState({
        user: value.data,
      })
      console.log('this is user',value.data)
    })
    .catch(error => {
      console.log('error get request not working', error)
    })

    axios.get('https://api.github.com/users/timotheemcdonald/followers')
    .then(value => {
        console.log('follower get request working')
        this.setState({
            followers: value.data
        })
        console.log('this is value', value)
        console.log('this is follower data', value.data)
    })
    .catch(error => {
        console.log('error', error)
    })

  }


  render(){
  return (
    <div>
      <UserCard user={this.state.user}/>
      <Followers followers={this.state.followers}/>

    </div>
  );

}
}

export default App;
