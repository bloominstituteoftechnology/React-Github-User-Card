import React from 'react';
import mappin from '../mappin.svg';



function UserCard(props) {
  return (
    <div className={props.darkMode ? 'user-card-dark' : 'user-card-light'}>
      <img src={props.avatar_url} style={{borderRadius: '50%', width: 150, alignSelf: 'center'}} alt="avi"/>
      <div className="user-details">
        <p style={{fontSize: 30}}><b>{props.name}</b></p>
        <p>{props.login}</p>
        <p><img src={mappin} style={{width: 13, filter: props.darkMode ? 'invert(90%)' : 'invert(30%)'}} alt='location' /> {props.location}</p>
        <div className="rff">
          <p>Public repos<br /> {props.public_repos}</p>
          <p>Following<br /> {props.following}</p>
          <p>Followers<br /> {props.followers}</p>
        </div>    
        <a href={props.html_url} target="_blank" rel="noopener noreferrer" className={props.darkMode ? 'button-dark' : 'button-light'}>Github Page</a>
      </div>
    </div>
  );
}


function CardList(props) {
  return <div>{props.cards.map(card => <UserCard {...card} darkMode= {props.darkMode} />)}</div>
} 

export default CardList;