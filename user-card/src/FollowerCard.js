import React from 'react';

const FollowerCard = (props) => {
    return (
        <div className="followerCard">
            <img src={props.img} alt={props.login} />
            <p>{props.name}</p>
        </div>
    )
}

export default FollowerCard;