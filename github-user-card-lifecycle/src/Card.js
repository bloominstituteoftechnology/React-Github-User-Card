import React from 'react';


const Card = props => {

  

    return (
      <div className="card">
        <img src={props.user.avatar_url} alt='user avatar'/>
      
        <h3>{props.user.name}</h3>
        <p>{props.user.login}</p>
        <a href={props.user.url}/>
        <p>Location:{props.user.location}</p>
        <p>Followers:{props.user.followers}</p>
        <p>Following:{props.user.following}</p>
        <p>Bio:{props.user.bio}</p>
      </div>

    )
}

export default Card;