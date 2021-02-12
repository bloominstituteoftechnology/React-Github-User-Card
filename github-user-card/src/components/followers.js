import React from 'react';
import axios from 'axios';

class Followers extends React.Component {
  render(){

    const { follower } = this.props;

    return (
        <div className='follower-card'>
            <img src={follower.avatar_url} alt='avatar' />
            <p>Username: {follower.login}</p>
    </div>
    );
  }
}

export default Followers;