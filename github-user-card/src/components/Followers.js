import React from 'react'
import FollowersCard from './FollowersCard';

const Followers = props => {
    return(
        <div>
            {props.followers.map(followers =>{
                return <FollowersCard key={followers.id} followers={followers} />
            })}

        </div>
    )
}
export default Followers;