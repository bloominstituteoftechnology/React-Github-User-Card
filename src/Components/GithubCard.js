import React from "react";
import GithubFollowers from "./GithubFollowers";

const GithubCard = (props) => {
  const url = `https://grass-graph.moshimo.works/images/${props.githubData.login}.png`;

  return (
    <div className="githubcont">
      <h2> Results:</h2>
      <div className="githubuser">
        <div className="image">
          <img src={props.githubData.avatar_url} alt="pfp" />
        </div>
        <div className="githubcardinfo">
          <h1>{props.githubData.name}</h1>
          <h3>Location : {props.githubData.location}</h3>
          <h3>
            Profile :{" "}
            <a href={props.githubData.html_url}>{props.githubData.html_url}</a>
          </h3>
          <h3>
            Followers: {props.githubData.followers} Following:{" "}
            {props.githubData.following}
          </h3>
          <h3>Bio : "{props.githubData.bio}"</h3>
          <h3>Contributions:</h3> <img className="cont" src={url} alt="lol" />
        </div>
      </div>

      <div className="followerscont">
        <h2>Followers :</h2>
        <div className="followerscard">
          {props.githubFollowers.map((item) => (
            <GithubFollowers key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GithubCard;
