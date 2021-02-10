import React from 'react'

class UserCard extends React.Component {
    render() {
        return (
            <div className='App'>
                <h1>{this.props.github.login}</h1>
                <img className='pic' src={this.props.github.avatar_url} alt="" />
                <h3>Followers: {this.props.github.followers}</h3>
                <h3>Following: {this.props.github.following}</h3>
            </div>
        )
    }
}

export default UserCard