import React from 'react'
import {Typography} from '@material-ui/core'

const Followers = props =>{
    return(
        <div className='follower-details'>
            <Typography variant='h5'>{props.follower.login}</Typography>
        </div>
        );
        
}

export default Followers 