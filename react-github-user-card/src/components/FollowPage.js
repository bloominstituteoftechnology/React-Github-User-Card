import React from 'react';
import './UsrPge.css';

function FollowPage(props) {
    return (
            <div>
            <h1>GitHub Followers</h1>
            {props.data.map(follower => {
                return(
                <div key={follower.id}>
                    <h2>GitHub Name: {follower.login}</h2>
                    <img src={follower.avatar_url} alt="Profile Picture, AKA, pfp."/>
                    <a href={follower.html_url} target="_blank">GitHub Profile</a>
                </div>
            )})})
            </div>
    )}
export default FollowPage;