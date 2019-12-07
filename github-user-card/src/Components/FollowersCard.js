import React, { Component } from 'react'

export default class FollowersCard extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.users.login}</h4>
                <p>Github: <a href={this.props.users.html_url}>{this.props.users.html_url}</a></p>
            </div>
        )
    }
}
