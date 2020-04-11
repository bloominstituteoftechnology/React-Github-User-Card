import React from 'react';

const User = ({user}) => {
    return (
        <div className="User">
            <div>
                <h3>{user.login}</h3>
                <img src={user.avatar_url} alt="user profile"/>
                <a href={user.html_url}>My Repositories</a>
            </div>
        </div>
    )
};

export default User;