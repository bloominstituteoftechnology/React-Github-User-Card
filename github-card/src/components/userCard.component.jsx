import React from 'react'

const UserCard = (props) => {
    const { name, avatar_url, bio } = props.data
    return (
        <div
            style={{
                border: '2px solid black',
                width: '500px',
                margin: '100px auto'
            }}
        >
            <img
                style={{ width: '200px', display: 'block', margin: '0 auto' }}
                src={avatar_url}
                alt="avatar"
            />
            <h1 style={{ display: 'inline' }}>{name}</h1>
            <p>{bio}</p>
        </div>
    )
}

export default UserCard
