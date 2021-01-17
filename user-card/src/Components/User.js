import React from 'react';
import './UserCard.css';

class User extends React.Component {
    render() {
        return (
            <>
                <h1>User:</h1>
                <img className='upic' src={this.props.pic} alt='user profile'/>
                <h2>{this.props.name}</h2>
                <h3>Followers:</h3>
                {this.props.followers.map(follow => {
                    return (
                        <>
                            <img className='fpic' key={follow.avatar_url} src={follow.avatar_url} />
                            <p key={follow.login}>{follow.login}</p>
                        </>
                    )
                })}
            </>
        )
    }
}

export default User;