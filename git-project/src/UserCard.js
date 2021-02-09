import React from 'react';
import styled from 'styled-components';

export default function UserCard (props) {
    return (
        <StyledUserCardContainer>
            <StyledImageDiv>
                <img src={props.userData.avatar_url} alt={props.userData.name} />
            </StyledImageDiv>

            <StyledInformationDiv>
                <p><b>Name:</b> {props.userData.name}</p>
                <p><b>Location:</b> {props.userData.location}</p>
                <p><b>Bio:</b> {props.userData.bio}</p>
                <p><b>Link to GitHub:</b> {props.userData.html_url}</p>
                <p><b>Link to GitHub:</b> {props.userData.repos_url}</p>
                {
                    props.userFollowers.length === 0 ? <b><p>{props.userData.name} user has no followers :(</p></b> : <p>{props.userFollowers}</p>
                }
            </StyledInformationDiv>
        </StyledUserCardContainer>
    );
};

const StyledUserCardContainer = styled.div`
    // border: solid 1px gray;
    text-align: center;
    width: 70%;
    padding: 4%;
    // border-radius: 10px;
    margin-top: 4%;
    box-shadow: 0px 0px 10px gray;
`;

const StyledImageDiv = styled.div`
    //border: solid 1px green;
    margin-bottom: 4%;

    img {
        //border: solid 1px yellow;
        // border-radius: 10px;
        // box-shadow: 2px 2px 7px gray;
        box-shadow: 0px 0px 10px gray;
    }
`;

const StyledInformationDiv = styled.div`
    // border: solid 1px pink;
    padding: 2%;
    //box-shadow: 2px 2px 7px gray;
    box-shadow: 0px 0px 10px gray;
`;