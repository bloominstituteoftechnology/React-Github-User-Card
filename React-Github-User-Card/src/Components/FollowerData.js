import React from "react";

function FollowerData(props) {
    return(
        <div>
        <img src={props.item.avatar_url} 
             data-pin-nopin="true"
             alt="Follower User Profile Image on Github"/>
        <h3> {props.item.login} </h3>
    </div>
    )    
}

export default FollowerData;