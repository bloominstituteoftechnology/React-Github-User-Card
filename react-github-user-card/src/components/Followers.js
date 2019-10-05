import React from 'react';
import UserCard from './UserCard.js'

function Followers (props) {
    console.log (props);
    return (
        <div>
        {props.followers.map(follower => <UserCard key={follower.login} {...follower} />)}
         </div>
    )
}

export default Followers;