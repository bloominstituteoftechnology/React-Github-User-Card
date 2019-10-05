import React from 'react';

function UserName(props) {
    console.log(props)
    return(
        <div>
            <h1>{props.item.login}</h1>
            <p>{props.item.location}</p>
            <img src={props.item.avatar_url} alt="Profile Pics" />
        </div>
    )
}

export default UserName;