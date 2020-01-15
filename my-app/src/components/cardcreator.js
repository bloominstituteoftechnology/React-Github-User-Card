import React from "react";




const GHcard = props => {
  return (
    <div className="card">
      <div className="act-card">
        <div className="image">
      <img src={props.avatar_url} />
      </div>
      
        <div class="card-info">
          <h3 class="name">{props.name}</h3>
          <p class="username">{props.login}</p>
          <p>Location: {props.location}</p>
          <p>
            Profile:
            <a href={props.repos_url}>{props.url}</a>
          </p>
          <p>Followers: {props.followers}</p>
          <p>Following: {props.following}</p>
          <p>Bio: {props.bio}</p>
        </div>
      </div>
      
      </div>
  );
};
export default GHcard;



       
