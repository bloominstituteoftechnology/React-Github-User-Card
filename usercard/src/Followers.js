import React from 'react';
import './App.css';

const Followers = (props) => {
  return (
    <div className='cards'>
      {props.followers.map((follower)=> (
        <div className='card'>
        <img src={follower.avatar_url} alt='Github profile'>
        </img>
        <div className='card-info'>
          <h3 className='name'>{follower.name}</h3>
          <p className='username'>{follower.login}</p>
          <p>{`Location: ${follower.location}`}</p>
          <p>Profile 
            <a href={follower.url}>{follower.url}</a>
          </p>
          <p>{`Followers: ${follower.followers}`}</p>
          <p>{`Following: ${follower.following}`}</p>
          <p>{`Bio: ${follower.bio}`}</p>
        </div>
    </div>  
      ))}
    </div>
  )
}

export default Followers;