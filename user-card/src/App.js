import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Card from './Card';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      followersList: [],
      userName: 'ayormeday'
    }
  } 
componentDidMount(){
  axios.get(`https://api.github.com/users/${this.state.userName}/followers`)
  .then(response => {
    this.setState({
      followersList: response.data
    })
  })
.catch(error => { 
  alert(error);
});
}


  render() {
    const { userName, followersList } = this.state;
    return (
    <div>
      <Card user={userName}/>
      {
        followersList.map(follower => {
         return <Card user={follower.login}/>
      }) 
      }
    </div>

    )
  }
}
