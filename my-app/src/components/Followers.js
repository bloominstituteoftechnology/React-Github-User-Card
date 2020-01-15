import React from 'react';

function Followers({ image, name, html_url }) {
    return(
        <div className="followers">
            <img src={image} alt="avatar photo" />
            <div className="url-container">
            <h2>{name} </h2>
            <a href={html_url} className="url">Go to user's GitHub</a>
            </div>
        </div>
    )
}

export default Followers;