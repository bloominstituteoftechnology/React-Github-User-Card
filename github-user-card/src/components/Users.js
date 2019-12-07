import React, { Component } from 'react';
import axios from "axios";
import UserCard from "./UsersCard";

class User extends Component {
    state = {
      user: [],
    }

    componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.user}`)
      .then(result => {
        this.setState({
          name: result.data.name,
          img: result.data.avatar_url,
          bio: result.data.bio,
          followers: result.data.followers,
        })
      })
      .catch(error => {
        console.log('error:', error)
      })
    }

    render() {

    return (
        <div>
            <UserCard 
            name={this.state.name} 
            img={this.state.img} 
            bio={this.state.bio} 
            followers={this.state.followers} 
            />
        </div>
        );
    }
}

export default User; 
