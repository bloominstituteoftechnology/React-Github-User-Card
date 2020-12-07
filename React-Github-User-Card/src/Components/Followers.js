import React from 'react';

export default function Followers (props) {
    return (
        <div className="follower">
            <img src={props.follower.avatar_url} alt="portrait" />
            <h2>{props.follower.login}</h2>
        </div>
    )
}