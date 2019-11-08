import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div `
    text-align: center;
    background-color: azure;
    width: 30vw;
    margin-top: 5%;
    padding: 5%;
    border-radius: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px #0000003d;
`;

const AvatarImg = styled.img `
    width: 170px;
    height 170px;
`;

function UserCard(props) {
    console.log("Usercard: props: ", props);
    return (
        <CardWrapper>
            <AvatarImg src={props.users.avatar_url}/>

            <h2>
               {props.users.login} 
            </h2>

            <p>
                {props.users.bio}
            </p>

            <a href={props.users.blog}>corymurray.dev</a>
        </CardWrapper>
    )

}

export default UserCard;


