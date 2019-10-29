import React from "react";

const FollowersCard = ({followers, img}) => {
    return (
        <div className="card">
         
            <img src={img} alt="user"/>
            <p className="name">Name: {followers}</p>
            <p className="name">Bio {}</p>
          
        </div>
    )
}

export default FollowersCard;