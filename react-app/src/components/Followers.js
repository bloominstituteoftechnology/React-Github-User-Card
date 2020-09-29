import React from 'react'

export default function Followers(props) {
    const { followers, user } = props
    return (
        <div className='followers'>
            <h2>Followers</h2>
            {followers.map(follower => 
                <div className='follower' key={follower.id}>
                    <h2>{follower.login}</h2>
                    <img width='100px' src={follower.avatar_url} alt={follower.name} />
                </div>
            )}
        </div>
    )
}