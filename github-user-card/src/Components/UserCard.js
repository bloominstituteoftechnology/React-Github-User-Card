import React, { Component } from 'react'

export default class UserCard extends Component {
    render() {
        return (
            <div className="ui card">
                <div className="image"><img src={this.props.users.avatar_url}/></div>
                <div className="content">
                    <div className="header">{this.props.users.name}</div>
                    <div className="meta"><span className="date">{this.props.users.location}</span></div>
                    <div className="description">{this.props.users.bio}</div>
                </div>
                <div className="extra content">
                    <a>
                    <i aria-hidden="true" className="user icon"></i>
                    {this.props.users.followers} Followers
                    </a><br />
                    <a href={this.props.users.html_url}>
                    <i aria-hidden="true" className="code icon"></i>
                     Github
                    </a>
                </div>
            </div>
        )
    }
}