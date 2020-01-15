import React from 'react';
import FollowersData from './FollowersData.js';

function UserCard(props) {
    return (
        <div>
            <h1>name: {props.name}</h1>
            <h2>username: {props.login}</h2>
            <h2>location: {props.location}</h2>
            <h2>followers: {props.followers}</h2>
            <img src={props.img}></img>
            {props.followersData.map(follower => (
                // <h3>{follower.followersUsename}</h3>
                <FollowersData img={follower.avatar_url} username={follower.login}/>
            ))};
        </div>
    )
}

export default UserCard;