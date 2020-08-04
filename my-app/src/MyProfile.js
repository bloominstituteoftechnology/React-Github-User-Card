import React from 'react'

const MyProfile = (props) => {
  return (
    <div>
      <div className="name">
        <img className="profile-img" src={props.myCard.avatar_url} />
        <h1>{props.myCard.name}</h1>
      </div>
    </div>
  )
}

export default MyProfile