import React from 'react';

function FollowersData(props){
    return (
        <div>
            <h3>{props.username}</h3>
            <img src={props.img}></img>
        </div>
    )
}

export default FollowersData