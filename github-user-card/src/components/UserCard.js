import React from "react";

const UserCard = ({user, img, bio}) => {
    return (
        <div className="card">
         
            <img src={img} alt="user"/>
            <p className="name">{user}</p>
            <p className="name">{bio}</p>
          
        </div>
    )
}

export default UserCard;