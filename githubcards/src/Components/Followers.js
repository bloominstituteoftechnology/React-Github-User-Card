import axios from 'axios';
import React, { Component } from 'react';

export default class Followers extends Component {

    state = {
        followers: []
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/kevinklukowski/followers')
        .then(res =>{
            this.setState({
                followers: res.data,
            })
        })
        .catch((err) => {
            console.log(err)
        })
        
    }

    render() {
        return(
            <div>
                {this.state.followers.map(follower => {
                    <div key={follower.id}>
                        <img src={follower.avatar_url} alt={follower.login} />
                    </div>    
                })}
            </div>
        )
    }
}