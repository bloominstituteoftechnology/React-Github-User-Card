import React from 'react'

const UserCard = (props) => {
  const { users } = props

  return (
    <div className="card">
      <img alt='Avatar' src={users.avatar_url} />
      <div className="card-info">
        <h3 className="name">{users.name}</h3>
        <p className="username">{users.login}</p>
        <p>Location: {users.location}</p>
        <p>
          Profile:
          <a href={users.html_url}>{users.html_url}</a>
        </p>
        <p>Followers: {users.followers}</p>
        <p>Following: {users.following}</p>
        <p>Bio: {users.bio}</p>
      </div>
    </div>
  )
}

export default UserCard
