import React from "react";

export default function UserCard(props) {
    return(
        <div>
            <img src={props.avatar_url}/>
            {props.name}
            {props.login}
            {props.html_url}
        </div>
    );
}