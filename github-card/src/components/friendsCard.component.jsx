import React from 'react'

import Card from './card.component'

const FriendsCard = (props) => {
    console.log('friends', props)
    return (
        <div>
            {props.map((follower) => {
                return <Card data={follower} />
            })}
        </div>
    )
}

export default FriendsCard
