import React from 'react'
import { Typography } from '@material-ui/core';

const User = props =>{
    return(
        <div className='user-details'>
            <Typography variant='h5'>{props.user.login}</Typography>
            <a href={props.user.url}>{props.user.url}</a>
        </div>
        );
        
}

export default User 