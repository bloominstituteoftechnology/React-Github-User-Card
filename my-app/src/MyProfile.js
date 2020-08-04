import React from 'react'

const MyProfile = (props) => {
  return (
    <div>
      <div className="name">
        <h1>{props.myCard.name}</h1>
        <img src={props.myCard.avatar_url} />
      </div>
    </div>
  )
}

export default MyProfile