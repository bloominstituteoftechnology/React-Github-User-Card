import React from 'react';
import Button from 'react-router-dom';

function User({username}) {
    const {avatar_url, login, html_url} = username
    return(
        <div className="my-profile">
            <img src={avatar_url} alt="avatar photo" />
            <div className="url-container">
                <h2> {login} </h2>
            <a href={html_url} className="url">Go to user's GitHub</a>
            </div>
        </div>
    )
}

export default User;