import React from "react";
import '../App.css'


const Followers = (props) => {

    return(
        <div className="follower">
            <img height="100" src={props.follower.avatar_url} alt="user face"/>
            <div className="bio-f">
                <p>{props.follower.login}</p>
                <p>{props.follower.html_url}</p>
            </div>
        </div>
    )
}

export default Followers;