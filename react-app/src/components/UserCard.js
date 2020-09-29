import React from 'react'

export default function UserCard(props) {
    const { name, bio, avatar_url } = props.user
    return (
        <div className='userCard'>
            <h2>{name}</h2>
            <h3>{bio}</h3>
            <img width='200px' src={avatar_url} alt={name} />
        </div>
    )
}