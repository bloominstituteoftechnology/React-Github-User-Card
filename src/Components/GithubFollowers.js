import React from "react";

const GithubFollowers = (props) => {
  const followurl = `https://grass-graph.moshimo.works/images/${props.item.login}.png`;
  return (
    <div className="githubcardfollower">
      <div className="image">
        <img src={props.item.avatar_url} alt="pfps" />
      </div>

      <div className="githubcardinfo">
        <h1>{props.item.login}</h1>
        <h3>
          Profile : <a href={props.item.html_url}>{props.item.html_url}</a>
        </h3>
        <h3>Contributions Graph :</h3>{" "}
        <img className="cont" src={followurl} alt="cont" />
      </div>
    </div>
  );
};
export default GithubFollowers;
