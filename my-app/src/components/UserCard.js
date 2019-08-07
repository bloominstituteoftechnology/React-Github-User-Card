import React from 'react';

const UserCard = (props) => {

    console.log("Properties of UserCard ->", props.data.gitHubData)
    return (
        <div className="userCard">
            <h2>{props.data.gitHubData.login}</h2>
            <img src={props.data.gitHubData.avatar_url} alt="Profile" />
            <h3>{props.data.gitHubData.bio}</h3>
            <h4>{props.data.gitHubData.location}</h4>
        </div>
    )
}

export default UserCard;