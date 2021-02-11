import React, { Component } from 'react';
import axios from 'axios';

export default class UserProfile extends Component {

    state= {
        user: null
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/KevinKlukowski')
        .then((res) => {
            this.setState({ user: res.data })
        })
        .catch((err) => console.log(err))
    }

    render() {
        if (!this.state.user) return <h3>lala</h3>;

        return(
            <div>
                <img src={this.state.user.avatar_url} alt={this.state.user.name} style={{ borderRadius: '50%', maxWidth: '200px' }}/>
                <h1>{this.state.name}</h1>
                <p>Username: {this.state.login}</p>
                <p>Repos: {this.state.user.public_repos}</p>
                <p>Gists: {this.state.user.public_gists}</p>
            </div>
        )
    }
}