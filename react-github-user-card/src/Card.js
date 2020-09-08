import React from 'react';
import './App.css'

const Card = (props)=>{
    return(
        <div className = "container">
        <div className = "myCard">
    <img src={props.daniel.avatar_url}  alt = "git card"></img>
      <h2>Me: {props.daniel.name}</h2>
      <h3>Git User: {props.daniel.login}</h3>
      <p>My Location: {props.daniel.location}</p>
      <p>Stalking: {props.danielfollowing}</p>
      </div>
      </div>
    )
}
export default Card;