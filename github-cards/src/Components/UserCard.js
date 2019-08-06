import React from 'react';

function UserCard(props) {
  return (
    <div className='user-card'>

      <img src={props.user.avatar_url} alt='avatar'></img>
      <h4>{props.user.location}</h4>
      <p>{props.user.bio}</p>


    </div>
  )
}


export default UserCard;