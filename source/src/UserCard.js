import React from 'react'
// import App from './App'


function UserCard(props) {
console.log('UserCard.js -> %cprops:', 'color: purple', props)

        
    return (
      <div>
        <img src={props.user.avatar_url} alt='github avatar' /> 
       <h2> {props.user.name}</h2>
       <p> {props.user.login}</p>
       <p> {props.user.location}</p>
       <p> {props.user.bio}</p>
       <p> {props.user.url}</p>
    
     <div>
      {props.followers.map(follower => 
        <div key={follower.id}>
            {follower.login}
      </div>)}
          
     </div>  
     </div>      
        )
    
    }
    
    
    export default UserCard;