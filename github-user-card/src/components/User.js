import React from "react";
import '../App.css'

const User = (props) => {

    return(
        <div className="user">
            <img height="250" src={props.user.avatar_url} alt="user face"/>
            <div className="bio-u">
                <p>{props.user.name}</p>
                <p>{props.user.login}</p>
                <p>{props.user.html_url}</p>
                <p>{props.user.followers}</p>
                <p>{props.user.location}</p>
                <p>{props.user.bio}</p>
            </div>
        </div>
    )

}

export default User;