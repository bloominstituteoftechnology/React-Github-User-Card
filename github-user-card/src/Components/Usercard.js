import React from 'react'
import UsercardForm from './UsercardForm'
import FollowerCard from './FollowerCard'

import './Usercard.styles.css'

function Usercard(props) {
    console.log('User Card.js', props)
    return (
        <div className='github-info'>
            <div className='user-card'>
                <UsercardForm user={props.githubUser} />
                <img src={props.contribution} alt="Github chart" />
            </div>
            <h2 className='follower-header'>Followers</h2>
            <div className='follower-cards'>
                {props.githubFollowers.map(follower => (
                    <FollowerCard
                        key={follower.id}
                        follower={follower} />
                ))}
            </div>
        </div>
    )
}

export default Usercard;