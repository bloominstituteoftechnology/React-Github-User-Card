import React, { Component } from 'react';
import axios from "axios";
import FollowersCard from "./FollowersCard";

class Followers extends Component {

    state = {
        followers: [],
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/carlostbanks/followers`)
        .then(res => {
            console.log(res)
            this.setState({ followers: res.data })
      })
        .catch(error => {
            console.log('error:', error)
        })
    }

    render() {
        return (
            <div>
                {this.state.followers.map( follower => (
                <FollowersCard key={follower.id} name={follower.login} img={follower.avatar_url} />
                ))}
            </div>
            );
        }
}

export default Followers; 
