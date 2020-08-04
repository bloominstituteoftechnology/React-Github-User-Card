import React from 'react'
import './App.css'

const MyProfile = (props) => {
  return (
      <div className="name">
        <img className="profile-img" src={props.myCard.avatar_url} />
        <h1 className="profile-text">{props.myCard.name}</h1>
        <a className="profile-text" href={props.myCard.html_url}>GitHub</a>
        <h2>My Friends:</h2>
      </div>
  )
}

export default MyProfile