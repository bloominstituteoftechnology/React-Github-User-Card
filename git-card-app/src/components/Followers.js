import React from 'react'

const Followers = (props) => {
  const { followers } = props
  return (
    <div className="card follower">
      <img alt="Avatar" src={followers.avatar_url} />
      <div className="card-info">
        <p className="username">Username:{followers.login}</p>
        <p>
          Profile:
          <a href={followers.html_url}>{followers.html_url}</a>
        </p>
      </div>
    </div>
  )
}

export default Followers