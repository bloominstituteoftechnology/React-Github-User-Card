import React from "react";
import styled from "styled-components";

const Profilebtn = styled.button`
  background-color:#b3ccff;
  border: 1px solid #000;
  width: auto;
  padding: 16px;
  margin: 10px

`
const Usercard = (props) => {
  return (
    <section>
      <div>
        <img src={props.userData.avatar_url} alt={props.userData.name} />
        <h1>{props.userData.name}</h1>
        <div>
          <i>{props.userData.login}</i>
        </div>
        <div>
          <b>Location: </b>
          {props.userData.location}
        </div>
        <div>
          <b>Followers: </b>
          {props.userData.followers}
        </div>
        <div>
          <b>Following: </b>
          {props.userData.following}
        </div>
        <div>
          <b>Bio: </b>
          {props.userData.bio}
        </div>
        <a href={props.userData.html_url}>
          <Profilebtn>View Profile</Profilebtn>
        </a>
      </div>
    </section>
  );
};

export default Usercard;
