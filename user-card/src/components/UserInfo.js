import React from 'react';

const UserInfo = props => {
        return ( 
            <div>
            <p>{props.company}</p>
            <p>{props.location}</p>
            <p>{props.bio}</p>
            </div>
        );
    }

export default UserInfo;