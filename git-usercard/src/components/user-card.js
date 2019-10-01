import React from "react"

const UserCard = (props) => {
console.log(props)
    return (
        
            <div key={props.data.id} className="user">
            <img src ={props.data.avatar_url} alt="profile picture"/>
            <h2> {props.data.name} </h2>
            <h3> Location: {props.data.location} </h3>
            <p> Followers: {props.data.followers} </p>
            <p> Following: {props.data.following} </p>

            </div>
        
    )
}

export default UserCard