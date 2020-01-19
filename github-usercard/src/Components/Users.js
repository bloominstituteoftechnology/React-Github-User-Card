import React, { Component } from 'react';
import UserCard from './UserCard';
import axios from 'axios';

class User extends Component{
    constructor(){
        super();
        this.state={
            user:[],
            followers:[]
        }
    };

    componentDidMount() {
        axios.all([
          axios.get('https://api.github.com/users/emster7013'),
          axios.get('https://api.github.com/users/emster7013/followers')
        ])
          .then(response => {
            this.setState({user: response[0].data, followers: response[1].data});
            console.log(response[1]);
          })
          .catch(error => {
            console.log('axios:', error);
          })
      }
  
      render() {
        return (
          <div>
            <UserCard user={this.state.user} followers={this.state.followers} />
          </div>
        );
      }
}

export default User;