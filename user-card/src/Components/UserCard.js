import React from 'react';
import User from './User';
import './UserCard.css';

class UserCard extends React.Component {
    render() {
        return(
            <div className='card'>
                <User pic={this.props.pic} name={this.props.name} 
                followers={this.props.followers} />
            </div>
        )
    }
}

export default UserCard;