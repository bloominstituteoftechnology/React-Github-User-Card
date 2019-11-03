import React from "react";

const UserCard = (props) => {
    return (
        <div>
            <h1>User: {props.username}</h1>
            <img src={props.image} alt={props.image} key={props.image}/>
            {console.log(props.username)}
        </div>
    )
}

export default UserCard;