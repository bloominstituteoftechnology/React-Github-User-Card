import React from 'react';
//import './Card.css';

function UserCard(props) {
  return (
    <div className='card'>
      <div className='left'>
        <img className='img' src={props.avatar} alt='user avatar' />
        <h4>{props.name}</h4>
        <p>{props.location}</p>
      </div>
    </div>
  );
}

export default UserCard;