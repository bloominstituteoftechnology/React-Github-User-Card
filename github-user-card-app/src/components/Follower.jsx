import React from 'react';



export const Follower = ({follower}) => {
    return (
        <div className='box'>
           <h2>Username: {follower.login}</h2>
           <h2>User id: {follower.id}</h2>
           <img className='follower-avatar' src={follower.avatar_url} alt={follower.url}/>
          
           
        </div>
    )
}