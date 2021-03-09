import React from 'react';
import './App.css';

const User = (props) => {
  return (
    <div className='card'>
      <img src={props.user} alt='Github profile'>
      </img>
      <div className='card-info'>
        <h3 className='name'>{props.user.name}</h3>
        <p className='username'>{props.user.login}</p>
        <p>{`Location: ${props.user.location}`}</p>
        <p>Profile 
          <a href={props.user.url}>{props.user.url}</a>
        </p>
        <p>{`Followers: ${props.user.followers}`}</p>
        <p>{`Following: ${props.user.following}`}</p>
        <p>{`Bio: ${props.user.bio}`}</p>
      </div>
    </div>
  )
}

export default User;