import React from "react";


const UserCard = props => {
    //console.log(props.primaryUserData)
    return (
    <div className="cardWapper">
        <div className="image-div">
        <img className="image" src ={props.primaryUserData.avatar_url} alt="user"/>
        </div>
        <div className="user-info">
        <h2>{props.primaryUserData.name}</h2>
        <h3>{props.primaryUserData.login}</h3>
        <h4>{props.primaryUserData.location}</h4>
        <h4>{props.primaryUserData.html_url}</h4>
        <h4>{props.primaryUserData.followers}</h4>
        <h4>{props.primaryUserData.following}</h4>
        <p>{props.primaryUserData.bio}</p>
        </div>
    </div>)
}

export default UserCard;