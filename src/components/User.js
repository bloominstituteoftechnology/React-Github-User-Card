import React from 'react';
import styled from 'styled-components';



const User = ({user}) => {
    return (
        <div className="User">
            <div>
                <h1>User's Profile</h1>
                <h3>{user.login}</h3>
                <img src={user.avatar_url} alt="user profile"/>
                <a href={user.html_url}>My Repositories</a>
            </div>
        </div>
    )
};

export default User;