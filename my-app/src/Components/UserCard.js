import React from "react";

const UserCard = ({user, img, bio}) => {
    return (
        <div>
            <img src={img} alt="user" />
            <p>Name: {user}</p>
            <p>Bio: {bio}</p>
        </div>
    )
}

export default UserCard