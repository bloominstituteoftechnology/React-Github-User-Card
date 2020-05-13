
import React, { useState } from 'react';
import axios from 'axios';
//import './Card.css';

function FollowerCard(props) {
  const [follower, setFollower] = useState([]);

  const handleFollower = e => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/lworku/followers`)
      .then(res => {
        setFollower(res.data);
        console.log('Followers ', follower);
      })

      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div>
      <button className='' onClick={handleFollower}>
        Followers
      </button>
      {console.log('followers return', follower)}
      {follower.map(item => (
        <div className='card'>
          <div className='left'>
            <img className='img' src={item.avatar_url} alt='user avatar' />
            <h4>{item.login}</h4>
            <p>{item.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FollowerCard;
