import React from "react";


const FollowerCards = props => {
    //console.log(props.userData)
    return (
    <div className="cardWapper">
        <div className="image-div">
        <img className="image" src ={props.userData.avatar_url} alt="user"/>
        </div>
        <div className="user-info">
        <h2>{props.userData.name}</h2>
        <h3>{props.userData.login}</h3>
        <h4>{props.userData.location}</h4>
        <h4>{props.userData.html_url}</h4>
        <h4>{props.userData.followers}</h4>
        <h4>{props.userData.following}</h4>
        <p>{props.userData.bio}</p>
        </div>
    </div>)
}

export default FollowerCards;