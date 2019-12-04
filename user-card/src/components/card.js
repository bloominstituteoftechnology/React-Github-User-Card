import React from 'react'

const Card = ({user, followers}) => {
    return (
    <div className='card'>
    <img src={user.avatar_url} />
    <div>
      <h3>{user.name}</h3>
      <p>{user.login}</p>
      <p>Location: {user.location}</p>
      <p>Profile:
        <a href={user.html_url}></a>
      </p>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      <p>Bio: {user.bio}</p>
    </div>
  </div>
)
}

export default Card