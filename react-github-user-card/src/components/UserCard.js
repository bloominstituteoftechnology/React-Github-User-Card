import React from 'react'

export default function UserCard(props) {

    console.log(props.name)

    if(props.login === undefined){
        return(
            <div className='card'>  
                <p className='secondary'>Enter a user to get info</p>
            </div>
        )
    } else {

        return (
            <div className='card'>
                <img className='user-image' src={props.avatar_url} alt='user profile'/>
                <div className='card-header'>
                    <h3>{props.login}</h3>
                    <p className='secondary'>{props.location}</p>
                </div>
                <p className='bio secondary'>
                    {props.bio}
                </p>
            </div>
        )
    }

    }
