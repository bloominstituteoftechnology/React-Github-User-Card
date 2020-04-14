import React from 'react'

import './FollowerCard.styles.css'

function FollowerCard(props) {
    // console.log(props)
    return (
        <div className='follower'>
            <img className='follower-image' src={props.follower.avatar_url} alt='Follower' />
            <h2 className='follower_username'>{props.follower.login}</h2>
            <a className='follower-link' href={props.follower.html_url}>Github Link</a>
        </div>
    )
}

export default FollowerCard;