import React from "react";

function Followers({ image, name, html_url, bio }) {
  return (
    <div className="followers">
      <h1> My GitHub Followers </h1>
      <img src={image} alt="avphoto" />
      <div className="url-container">
        <h2>{name}</h2>
        <a href={html_url} className="url">
         <p>{name}'s Github profile </p> 
        </a>
        <p className="bio"> {bio}</p>
      </div>
    </div>
  );
}

export default Followers;
