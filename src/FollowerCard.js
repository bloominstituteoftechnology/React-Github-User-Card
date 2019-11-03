import React from "react";

const FollowerCard = (props) => {
    return (
        <div>
        <h3>Followers</h3>
        <div>
        {props.followers.map(item => (<p>{item.login}</p>))}
        </div>
        {console.log(props.followers, "followers")}
        </div>
    )
}

export default FollowerCard;