import React from 'react'

const Cards = (props) => {
  // const {friends} = props;

  return (
    <div className="friends-container">
      {props.cards.map(friends => (
        <div className="friends-name">
          <img className="profile-img" src={friends.avatar_url} />
          <h1 className="profile-text">{friends.login}</h1>
          <a className="profile-link" href={friends.html_url}>GitHub</a>
        </div>
      ))}
    </div>
  )
}

export default Cards