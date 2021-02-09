import React from 'react';
import Follower from './Follower';

class UserCard extends React.Component {
    constructor () {
        super ();
        this.state = {}
    }

    render () {
        return (
            <div className='card'>
                <img src={this.props.user.avatar_url} alt='profile avatar' className='cardImg' />
                <h2>{this.props.user.name}</h2>
                <p>Location: {this.props.user.location}</p>
                <p>Bio: {this.props.user.bio}</p>
                <p>Followers: {this.props.user.followers}</p>
                <p>Following: {this.props.user.following}</p>
            </div>
        )
    }
}

export default UserCard;