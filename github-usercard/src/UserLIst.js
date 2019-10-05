import React from 'react';

function UserList(props) {
    console.log(props)
    return(
        <div>
            <h1>{props.item.login}</h1>
            <img src={props.item.avatar_url} alt="Profile Pics" />
        </div>
    )
}

export default UserList;