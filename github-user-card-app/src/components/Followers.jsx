import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Follower } from './Follower';

export const Followers = ({user}) => {
    const [followers, setFollowers] = useState([]);
    
   useEffect(() =>{
       axios.get(`https://api.github.com/users/${user}/followers`)
       .then(response => setFollowers(response.data))
       .catch(error => console.log(error))
    }, [user])
    
    
        return ( 
            <div className='followers-section'>
            {followers.map(el =>
                <Follower follower={el} key={el.id}/>)}
                </div>
         );
    
}
 
