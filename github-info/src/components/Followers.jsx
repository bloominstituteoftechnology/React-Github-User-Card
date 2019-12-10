import React from 'react'

function Followers({image , name}) {
    return (
        <div>
            <img src={image} alt="profile picture" />
            <p>Username: {name}</p>
            
        </div>
    )
}

export default Followers
