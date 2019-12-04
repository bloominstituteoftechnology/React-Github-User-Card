import React from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'

const UserCard = p => {

        return (
            <div className='user-card'>
                <img src={p.imgUrl} alt='avatar'/>
                <h1>{p.name}</h1>
                <p>{p.location}</p>
                <a href={p.url}>Github Repository</a>
            </div>
        )

    }

    export default UserCard