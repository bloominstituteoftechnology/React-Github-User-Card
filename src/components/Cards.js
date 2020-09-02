import React from "react"


const Cards = props => {

    return(
        <>
            <div key={props.users.id} className="cards">
                <h3>{props.users.name}</h3>
                <img src={props.users.avatar_url} alt={`${props.users.name}'s avatar`} />
                <p>{props.users.bio}</p>
                <p>{props.users.location}</p>
                <p>{props.users.followers} Followers & {props.users.following} Following</p>
            </div>
        </>
    );
}


export default Cards;