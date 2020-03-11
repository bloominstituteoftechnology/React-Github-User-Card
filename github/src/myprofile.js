import React from 'react';

function MyProfile(props) {
    let { name, login, avatar_url} = props.user;

    return (
        <div>
            <img src={avatar_url}/>
            <p>{name}</p>
            <p>@{login}</p>
        </div>
    )
}

export default MyProfile;