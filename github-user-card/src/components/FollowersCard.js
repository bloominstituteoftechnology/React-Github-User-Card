import React from 'react';

const FollowersCard = props => {
    return (
        <div>
            <h2>Followers: </h2>
            <img src={props.followers.avatar_url} alt='Users Face' />
            <h4>Name: {props.followers.name}</h4>
        </div>
    )
}
export default FollowersCard;