import React from "react";
import styled from "styled-components";
const StyledGit = styled.div`
  border: solid 1px black;
  margin-right: 10%;
  margin-left: 10%;
  .avatar {
    display: flex;
    justify-content: center;
  }
  img {
    height: 15rem;
    width: 15rem;
  }
  p {
    text-align: center;
    margin: 2%;
  }
`;
export default function GitDisplay(props) {
  return (
    <StyledGit>
      <h2>{props.gitcard.login}</h2>
      <div className="avatar">
        <img src={props.gitcard.avatar_url} alt="avatar" />
      </div>
      <p>Name: {props.gitcard.name}</p>
      <p>Hirable: {props.gitcard.hirable}</p>
      <p>Location: {props.gitcard.location}</p>
      <p>Bio: {props.gitcard.bio}</p>
      <p>Email: {props.gitcard.email}</p>
      <p>Public Repos: {props.gitcard.public_repos}</p>
      <p>Followers: {props.gitcard.followers}</p>
      <p>Following: {props.gitcard.following}</p>
    </StyledGit>
  );
}
