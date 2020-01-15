import React from 'react';
import './UsrPge.css';

function UserPage(props) {
    console.log(props.data)
        return (
              <div>
                   <h1>GitHub Profile</h1>
                       <br/>
                   <h1>Name: {props.data.name}</h1>
                       <br/>
                   <h2>GitHub Name: {props.data.login}</h2>
                   <img src={props.data.avatar_url} alt="Profile Picture, AKA, pfp."/>
                       <br/>
                   <a href={props.data.html_url} target="_blank">Profile</a>
                   <p>Following: {props.data.following} Followers: {props.data.followers}</p>
                   <p>{props.data.bio}</p>
              </div>
        )
}
    export default UserPage;