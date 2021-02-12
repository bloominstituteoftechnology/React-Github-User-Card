import React from 'react';

class User extends React.Component {
  render(){

    const { currentUser } = this.props;

    return (
      <div className='user-card'>
          {console.log('props', this.props)}
          <img src={currentUser.avatar_url} alt='avatar' />
          <p>Name: {currentUser.name}</p>
          <p>Username: {currentUser.login}</p>
          <p>Bio: {currentUser.bio}</p>
          <p>Location: {currentUser.location}</p>
          <p>Company: {currentUser.company}</p>
          <p>Blog: {currentUser.blog}</p>
          <p>Email: {currentUser.email}</p>
          <p>Followers: {currentUser.followers}</p>
          <p>Following: {currentUser.following}</p>
      </div>
    );
  }
}

export default User;