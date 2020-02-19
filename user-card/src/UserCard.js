import React from 'react';

const UserCard = (props) => {
    return (
        <div className="userCard">
            <img src={props.img} alt={props.login} />
            <h2>{props.name}</h2>
        </div>
    )
}

export default UserCard;