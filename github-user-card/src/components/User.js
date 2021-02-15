import React from "react";
import '../App.css'

const User = (props) => {

    return(
        <div className="user">
            <img height="250" src={props.user.avatar_url} alt="user face"/>
            <div className="bio-u">
                <h3>{props.user.name}</h3>
                <p>{props.user.login}</p>
                <a href={props.user.html_url}>{props.user.html_url}</a>
                <p>Followers: {props.user.followers}</p>
                <p>{props.user.location}</p>
                <p>{props.user.bio}</p>
            </div>
        </div>
    )

}

export default User;