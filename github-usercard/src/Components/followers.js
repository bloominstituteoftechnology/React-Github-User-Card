import React from "react";
import styled from "styled-components";

const Img = styled.img`
    max-width: 125px
    max-height: 125px;
    margin: auto 0;
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  text-align: left;
  margin: 2rem;
`;

const Div2 = styled.div`
    margin-left 2rem;
`;

const Followers = props => {
  return (
    <Div>
      <Img src={props.following.avatar_url} alt="img" />

      <Div2>
        <h3>{props.following.name}</h3>
        <h4>{props.following.login}</h4>
        <p>{props.following.bio}</p>
        <img
          className="followerConCard"
          src={`http://ghchart.rshah.org/${props.following.login}`}
          alt="ghcard"
        />
      </Div2>
    </Div>
  );
};

export default Followers;
