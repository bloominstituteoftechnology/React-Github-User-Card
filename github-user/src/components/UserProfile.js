import React, { Component } from 'react'
import axios from 'axios'

export default class UserProfile extends Component {
state ={
    user: null
}

componentDidMount(){
    axios
    .get('https://api.github.com/users/coriestewart1989')
    .then((res)=>{
        this.setState({user: res.data})
    })
}

    render() {
        if(!this.state.user) return<h3>Loading User</h3>
        return (
            <div>
                <img src={this.state.user.avatar_url}
                 alt={this.state.user.name}
                width='300'
                style ={{borderRadius: '50%'}}/>
                <h3>{this.state.user.name}</h3>
                <p>username: {this.state.user.login}</p>
                <p>repos: {this.state.user.public_repos}</p>
                <p>gists: {this.state.user.public_gists}</p>
            </div>
        )
    }
}
