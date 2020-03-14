import React from "react";

import styled from "styled-components";
import App from "../App";

const Container = styled.div`
  width: 500px;
  border: 2px solid #333333;
  background: ghostwhite;
  .profile-main-div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px 0;
    .profile-name-div {
      width: 250px;
      h2 {
        font-weight: 400;
        margin-top: -20px;
        font-size: ${props => !props.name && "32px"};
        font-weight: ${props => !props.name && 700};
      }
    }
  }
`

const CardHeader = styled.div`
  background: #333333;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 50px;
`

const CardIcon = styled.img`
  width: 50px;
  height: 50px;
`

const CardProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100px;
`

function Card({ profile }) {
    return (
        <Container name={profile.name}>
            <CardHeader>
                <h1>Github Card</h1>
                <CardIcon src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/64/social_media_logo_github-512.png" />
            </CardHeader>
            <div className="profile-main-div">
                <CardProfileImg src={profile.avatar_url} />
                <div className="profile-name-div">
                    <h1>{profile.name}</h1>
                    <h2>{profile.login}</h2>
                    <p>{profile.bio}</p>
                </div>
            </div>
        </Container>
    )

}

export default Card;