import React from "react";
import '../App.css'


const Followers = (props) => {

    return(
        <div className="follower">
            <img height="100" src={props.follower.avatar_url} alt="user face"/>
            <div className="bio-f">
                <p>{props.follower.login}</p>
                <a href={props.follower.html_url}>{props.follower.html_url}</a>
            </div>
        </div>
    )
}

export default Followers;