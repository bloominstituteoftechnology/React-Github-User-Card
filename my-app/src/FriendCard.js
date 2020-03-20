import React from "react";

const FriendCard = props => {
console.log(props);
    return (
    <div className="friendcardcontainer">

        <div key={props.friend.id}  className="fcont">
            {props.friend.map(friend => {
                return (
                    <div className="friendcard">
                        <h3> {friend.login} </h3>
                        <img src={friend.avatar_url} />
                    </div>
                )
                })}
        </div>

    </div>
    
    )
};

export default FriendCard;