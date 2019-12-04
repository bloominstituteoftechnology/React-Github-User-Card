import React from 'react'
import Card from './card'
import Followers from './followers'

const CardGrid = props => {
    console.log(props.user)
    console.log(props.followers)
    return (
    <div>
        <Card user={props.user}/>
        {props.followers.map(follower => (
            <Followers key={follower.node_id} img={follower.avatar_url} name={follower.login}/>
        ))}
    </div>
)
}

export default CardGrid