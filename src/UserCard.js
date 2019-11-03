import React from "react";

const UserCard = (props) => {
    return (
        <div>
            <p>User: {props.username}</p>
            <img src={props.image} alt={props.image} key={props.image}/>
            {console.log(props.username)}
        </div>
    )
}

export default UserCard;