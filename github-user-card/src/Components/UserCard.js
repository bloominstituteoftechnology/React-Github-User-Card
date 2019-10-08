import React, { Component } from 'react'

export default class UserCard extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.users.name}</h1>
                <p>Bio: {this.props.users.bio}</p>
                <p>Followers: {this.props.users.followers}</p>
            </div>
        )
    }
}
