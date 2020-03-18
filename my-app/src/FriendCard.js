import React from "react";

const FriendCard = props => {
console.log(props);
    return (
    <div className="friendcard">

        <div key={props.friend.id}  >
            {props.friend.map(friend => {
                return <h3> {friend.login} </h3>
                })}
        </div>

    </div>
    
    )
};

export default FriendCard;