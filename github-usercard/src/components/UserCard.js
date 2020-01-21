import React from "react";
import User from "./User";

export default function UserCard(props) {
    // const {
    //     avatar_url,6
    //     name,
    //     login,
    //     html_url
    // } = props.user;

    return(
        <div>
            <img src={props.avatar_url}/>
            {props.name}
            {props.login}
            {props.html_url}
        </div>
    );
}