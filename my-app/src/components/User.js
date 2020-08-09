import React from "react";


function User(props) {
    console.log("User component", props)

    return(
        <div className="User-Card">
            <p>Hey from User.js component</p>
            <p>Name: {props.person.name}</p>
            <p>User Name: {props.person.login}</p>
            <p>Location: {props.person.location}</p>
            <p>Repositories:  {props.person.public_repos}</p>
            <img src = {props.person.avatar_url} />
        </div>    
    );
}

export default User;