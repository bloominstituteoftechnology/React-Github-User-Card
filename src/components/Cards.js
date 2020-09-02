import React from "react"


const Cards = props => {

    return(
        <>
            <div key={props.users.id}>
                <h3>{props.users.name}</h3>
            </div>
        </>
    );
}


export default Cards;