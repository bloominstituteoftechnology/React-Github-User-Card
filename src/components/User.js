import React from 'react';
import styled from 'styled-components';

const UserProf = styled.div`
    display: flex;
    flex-direction: column;
`;

const UserRepo = styled.a`
    margin: 8% 0 0 25%;
    text-decoration: none;
    border: 1px solid cyan;
    color: cyan;
    border-radius: 5px;
    width: 50%;
    padding: 10px 0;

    &:hover {
        background-color: cyan;
        color: whitesmoke;
    }
`;

const User = ({user}) => {
    return (
        <div className="User">
            <UserProf>
                <h1>User's Profile</h1>
                <h3>{user.login}</h3>
                <img src={user.avatar_url} alt="user profile"/>
                <UserRepo href={user.html_url}>My Repositories</UserRepo>
            </UserProf>
        </div>
    )
};

export default User;