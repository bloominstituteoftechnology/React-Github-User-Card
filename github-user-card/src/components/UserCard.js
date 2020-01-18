import React from "react";

const UserCard = props => {
    return (
        <div className="user-card">
            <img src={props.img} width="30%" alt=""></img>
            <h2>{props.name}</h2>
            <span>GitHub Handle: </span>
            <a href={props.url}>{props.login}</a>
            <p> Total Followers: {props.followers}</p>
            <p> Total Repos: {props.repos}</p>
            <p> Location: {props.location}</p>

        </div>
    )
}

export default UserCard;