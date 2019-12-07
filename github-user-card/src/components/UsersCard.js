import React from "react";

const UserCard = ({ name, img, bio, followers }) => {
    return (
        <div>
            <h2>Name: {name}</h2>
            <img src={img} alt='picture'/>
            <p>Bio: {bio}</p>
            <p>Number of Followers: {followers}</p>
        </div>
    )
}
export default UserCard; 
