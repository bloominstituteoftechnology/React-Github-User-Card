import React from 'react';


const User = (props) => {
   return (
       <div>
           <img src={props.userData.avatar_url} alt='avatar'/>
         <h2>{props.userData.login} - {props.userData.name}</h2>  
         <p>Blog: {props.userData.blog}</p>
         <p> Location: {props.userData.location}</p>
         <p>Followers: {props.userFollowers.map(
             follower => {
                 return <div><img width='50' height='50' src={follower.avatar_url} alt='followers' />
                        <p>{follower.login} - {follower.name}</p>  </div>
             }
         )}</p>
       </div>
   )

}

export default User;