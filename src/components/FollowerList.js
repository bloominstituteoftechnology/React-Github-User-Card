import React from 'react';

const FollowerList = ({follow} )=> {
    return (
        <div>
            <h3>{follow.login}</h3>
            <img src={follow.avatar_url} alt ="follower profile"/>
            <a href={follow.html_url}>Follower's Repositories</a>
        </div>
    )
};

export default FollowerList;