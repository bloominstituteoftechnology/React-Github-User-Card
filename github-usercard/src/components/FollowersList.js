import React from 'react'
import Follower from './Follower'

export default function FollowersList({followers}) {
    
    return (
        <div className="followers-list">
            {followers.map(follower => (
                <Follower follower={follower} key={follower.login}/>
            ))}
        </div>
    )
}