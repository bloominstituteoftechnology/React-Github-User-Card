import React from 'react';
import mappin from '../mappin.svg';


function UserCard(props) {
  return (
    <div className={props.darkMode ? 'user-card-dark' : 'user-card-light'}>
      <img src={props.avatar_url} style={{borderRadius: '50%', width: 150, alignSelf: 'center'}} alt="avi"/>
      <div className="user-details">
        <p style={{fontSize: 30}}><b>Name{props.name}</b></p>
        <p>Username{props.login}</p>
        <p><img src={mappin} style={{width: 13, filter: 'invert(30%)'}} alt='location' />{props.location}</p>
        <div className="rff">
          <p>Public repos {props.public_repos}</p>
          <p>Following {props.following}</p>
          <p>Followers {props.followers}</p>
        </div>    
        <a href={props.html_url} className={props.darkMode ? 'button-dark' : 'button-light'}>Github Page</a>
      </div>
    </div>
  );
}


export default UserCard;
