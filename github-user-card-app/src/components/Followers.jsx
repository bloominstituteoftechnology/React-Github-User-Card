import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Follower } from './Follower';

export const Followers = (props) => {
    const [followers, setFollowers] = useState([]);
    console.log(props.user.login);
   useEffect(() =>{
       axios.get(`https://api.github.com/users/${props.user.login}/followers`)
       .then(response => setFollowers(response.data))
       .catch(error => console.log(error))
    }, [])
    
    
        return ( 
            <div className='followers-section'>
            {followers.map(el =>
                <Follower follower={el} key={el.id}/>)}
                </div>
         );
    
}
 
