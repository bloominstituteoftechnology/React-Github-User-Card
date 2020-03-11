import React from 'react';
import './Card.css';

function Followers(props) {
    return (
        <>
          {props.followers.map(user => (
            <div key={user.id} className='user'>
              <div>
                <h3>{user.name}</h3>
                <p>{user.login}</p>            
                <p>{user.bio}</p>
                <p>Location: {user.location}</p>
                <p>Repos: {user.public_repos}</p>                    
                  </div>          
              </div>
            ))}                
        </>
            )}
        
   

export default Followers;