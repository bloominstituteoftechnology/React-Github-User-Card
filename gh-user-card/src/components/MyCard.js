import React from 'react';

function MyCard(props) {
    return (
        <section>
            <h4>Hey there I'm {props.name} </h4>
            <h3>My Github handle is {props.login}</h3>
            <p>I am located near {props.location}</p>
            <img src={props.avatar_url} />
            <h5>A little bit about me: </h5>
            <p>{props.bio}</p>
            <h6>Followers on Github: {props.followers}</h6>
            <h6>Following: {props.following} </h6>
            <p>My Github was created on {props.created_at}</p>
        </section>
    );
}

export default MyCard;
