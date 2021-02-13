import React from 'react';

const GitSocial = props => {
    return ( 
        <div>
            <p>followers: {props.followers}</p>
            <p>following: {props.following}</p>
            <p>stars: {props.stars} </p>
            <p>twitter: {props.twitter}</p>
            <p>website: {props.site} </p>
        </div>
    );
}

export default GitSocial;