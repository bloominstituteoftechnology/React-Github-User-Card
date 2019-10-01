import React from "react";


const UserCard = props => {
    console.log(props.primaryUserData)
    return (
    <div>
        <img scr ={`props.primaryUserData.avatar_url`} alt="user"/>
        <h2>{props.primaryUserData.name}</h2>
        <h3>{props.primaryUserData.login}</h3>
        <h4>{props.primaryUserData.location}</h4>
        <h4>{props.primaryUserData.html_url}</h4>
        <h4>{props.primaryUserData.followers}</h4>
        <h4>{props.primaryUserData.following}</h4>
        <p>{props.primaryUserData.bio}</p>
    </div>)
}

export default UserCard;