import React from 'react'
import FollowersCard from './FollowersCard';

const Card = props => {
    return(
        <div className= 'follow'>
            {props.followers.map(followers =>{
                return <FollowersCard key = {followers.id} followers ={followers}/>
            })}
            
        </div>
    )
}
export default Card;