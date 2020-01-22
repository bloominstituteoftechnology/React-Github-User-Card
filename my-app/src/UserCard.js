import React from "react";

const UserCard = props => {
console.log(props);
    return (
    <div className="usercard">
        <h3> {props.user.login} </h3>
        <img src={props.user.avatar_url} />
    </div>)
};

export default UserCard;