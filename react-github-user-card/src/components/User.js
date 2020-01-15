import React from 'react';

const User = props => {
return (
    <div className="user-card">
    <div className="usercard">
        <h2> User: {props.user.name}</h2>
        <h3>{props.user.location}</h3>
        <h4> Bio: {props.user.bio}</h4>
        <p> Followers: {props.user.followers}</p>
        <p> Following: {props.user.following}</p>
    </div></div>
);
};

export default User;