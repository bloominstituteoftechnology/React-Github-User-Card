import React from 'react';

function UserCard(props) {
    return (
        <div>
            <h1>name: {props.name}</h1>
            <h2>username: {props.login}</h2>
            <h2>location: {props.location}</h2>
            <h2>followers: {props.followers}</h2>
            <img src={props.img}></img>
        </div>
    )
}

export default UserCard;