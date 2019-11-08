import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div `
    display: flex;
    text-align: center;
    flex-direction: row;
    background-color: azure;
    width: 50vw;
    margin-top: 5%;
    padding: 5%;
    border-radius: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px #0000003d;
`;

const AvatarImg = styled.img `
    width: 170px;
    height 170px;
`;

function FollowerCard (props) {
    console.log("FollowerCard: Props:", props.followers);

    return (
    <>
        {
            props.followers.map( follower => (
                <CardWrapper key = {props.follower}>
                    
            
                   
                </CardWrapper>
            ))
        }
    </>
    )
}
export default FollowerCard;