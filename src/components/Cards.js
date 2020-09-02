import React from "react"
import "../cards.css"


const Cards = props => {

    return(
        <section className="card-section">
            <div key={props.users.id} className="cards">
                <h3>{props.users.name}</h3>
                <img src={props.users.avatar_url} alt={`${props.users.name}'s avatar`} />
                <p>{props.users.bio}</p>
                <p>{props.users.location}</p>
                <p>{props.users.followers} Followers & {props.users.following} Following</p>
            </div>
        </section>
    );
}


export default Cards;