import React from 'react'
import User from './User'
import Followers from './Followers'
import { Typography } from '@material-ui/core'

const UserSheet = props =>{
    return(
        <div>
            <User user={props.user}/>
            <Typography variant='h4' color='secondary'>Followers</Typography>
            {
                props.followers.map(follower =>(
                    <Followers key={follower.id} follower={follower}/>
                ))
            }
            
        </div>
    );
}

export default UserSheet 
