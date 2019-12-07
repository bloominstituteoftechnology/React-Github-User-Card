import React from "react";

const FollowersCard = ({ name, img }) => {
    return (
        <div>
            <h2>Name: {name}</h2>
            <img src={img} alt='picture'/>
        </div>
    )
}
export default FollowersCard; 
