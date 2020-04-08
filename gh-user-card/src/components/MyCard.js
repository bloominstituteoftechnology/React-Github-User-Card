import React from 'react';

function MyCard(props) {
    return (
        <section>
            <h4>Hey there I'm {props.myInfo.name} </h4>
            <h3>My Github handle is {props.myInfo.login}</h3>
            <p>I am located near {props.myInfo.location}</p>
            <img
                src={props.myInfo.avatar_url}
                alt="Avatar URL for selected person"
            />
            <h5>A little bit about me: </h5>
            <p>{props.myInfo.bio}</p>
            <h6>Followers on Github: {props.myInfo.followers}</h6>
            <h6>Following: {props.myInfo.following} </h6>
            <p>My Github was created on {props.myInfo.created_at}</p>
        </section>
    );
}

export default MyCard;
