import React from 'react';

export default function Card (props) {

    return(
        <div>
            <img src={props.data.avatar_url} alt="user avatar" />
            <h2>{props.data.name}</h2>
            <a href={props.data.html_url}>{props.data.login}</a>
            <h4>Location:</h4> <p>{props.data.location}</p>
            <h4>Whole Deal:</h4> <p>{props.data.bio}</p>
            <h4>Followers:</h4>
            <ul>
            {props.followers.map(follower =>{
                return (
                <li key={follower.login}><a href={follower.html_url}>{follower.login}</a></li>
                    )
            })}
            </ul>
        </div>
    )
}
