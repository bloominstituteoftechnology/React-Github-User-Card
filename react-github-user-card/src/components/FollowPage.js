import React from 'react';
import './UsrPge.css';

function FollowPage(props) {
    console.log(props.data)
        return (
              <div>
                   <h1>GitHub Profile</h1>
                   <h1>Name: {props.data.name}</h1>
                   <h2>GitHub Name: {props.data.login}</h2>
                   <img src={props.data.avatar_url} alt="Profile Picture, AKA, pfp."/>
                        <br/>
                   <a href={props.data.html_url} target="_blank">GitHub Profile</a>
              </div>
        )
}
    export default FollowPage;