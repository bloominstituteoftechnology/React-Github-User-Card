import React from 'react';

class User extends React.Component {
  render(){

    const { user } = this.props;

    return (
      <div className='user-card'>
          <img src={user.avatar_url} alt='avatar' />
          <p>Name: {user.name}</p>
          <p>Username: {user.login}</p>
          <p>Bio: {user.bio}</p>
          <p>Location: {user.location}</p>
          <p>Company: {user.company}</p>
          <p>Blog: {user.blog}</p>
          <p>Email: {user.email}</p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
      </div>
    );
  }
}

export default User;