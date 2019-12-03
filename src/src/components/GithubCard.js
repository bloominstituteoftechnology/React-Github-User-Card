import React from 'react'
import { Link } from 'react-router-dom'

const UserCard = ({userCard}) => {
    const {name, location, url} = userCard
    return (
        <div className='user-card'>
            <h1>{name}</h1>
            <p>{location}</p>
            <Link to={url}>{url}</Link>
        </div>
    )

}

export default UserCard