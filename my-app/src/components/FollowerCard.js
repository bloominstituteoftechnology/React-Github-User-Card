import React from 'react';

const FollowerCard = (props) => {

    const follower = props.follower;
    return (
        <div className="item">
            <h1>{follower.login}</h1>
            <img src={follower.avatar_url} alt={follower.login}/>
            <a href={follower.html_url}>GitHub Profile</a>
        </div>
    )
}
export default FollowerCard;