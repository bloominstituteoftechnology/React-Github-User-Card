import React from 'react';

// CREATED A FUNCTION VS CLASS COMPONENT BECAUSE THESE ARE JUST CARDS THAT WILL NOT BE CONTROLLING THEMSELVES IN ANY WAY
// BRAIN PROCESS = TEMPLATE USED FOR DESIGN OR STRUCTURE ? FUNCTIONAL COMPONENT : CLASS COMPONENT
const ProfileCards = props => {
  return(
    <>
      <div>
        <h2>{props.info.name}</h2>
        <h4>{props.info.bio}</h4>
        <p>Location: {props.info.location}</p>
        <p>Followers: {props.info.followers}</p>
        <p>Following: {props.info.following}</p>
      </div>

      <div>
        <h2>{props.followerInfo.name}</h2>
        <h4>{props.followerInfo.bio}</h4>
        <p>Location: {props.followerInfo.location}</p>
        <p>Followers: {props.followerInfo.followers}</p>
        <p>Following: {props.followerInfo.following}</p>
      </div>
    </>
  )
}

export default ProfileCards;