import React from "react";
import App from "../App.css"


function User(props) {
    console.log("User component", props)

    return(
        <div className="User-Card">
            <div className = "user-info">
                <p>Hey from User.js component</p>
                <p>Name: {props.person.name}</p>
                <p>User Name: {props.person.login}</p>
                <p>Location: {props.person.location}</p>
                <p>Repositories:  {props.person.public_repos}</p>
                <a href = {props.person.html_url}> View My GitHub </a>
            </div>
            <div className = "image">
                <img src = {props.person.avatar_url} alt= "woman standing in front of sculpture" />
            </div>
        </div>    
    );
}

export default User;