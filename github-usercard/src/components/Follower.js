import React from 'react'

export default function Follower({follower}) {

    return(
       <div className="followers-div">
           <img src={follower.avatar_url} alt="follower"></img>
           <p>{follower.login}</p>
       </div> 
    )
}