import React from 'react';

const UserPage = ({ user }) => {
    const userBlog = (blog) => {
        return(
            <span>Website: <a href={'http://' + blog}>{blog}</a></span>
        )
    }
    return (
        <div className="git-card">

            <div className="git-img">
                <img src={user.avatar_url} alt={user.login} />
            </div>
            <div className="git-data">
                <h1 className="git-name">{user.name}</h1>
                <h2 className="git-login"><a href={user.html_url}>{user.login}</a></h2>
                <p className="bio">{user.bio ? `Bio: ${user.bio}` : null}</p>
                <p>{user.location ? `Location: ${user.location}` : null}</p>
                <p>{user.blog ? userBlog(user.blog) : null}</p>
            </div>
        </div>

    )
};

export default UserPage;