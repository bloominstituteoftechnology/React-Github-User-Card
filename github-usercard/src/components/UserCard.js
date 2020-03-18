import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  width:440px;
  margin:0px auto;
  margin-bottom:50px;
  padding:20px;
  padding-right:40px;
  border:3px solid black;
  background-color: white;
`;

const StyledName = styled.h1`
  color:purple;
  margin-left:20px;
`;

const StyledInfo = styled.h2`
  font-weight:normal;
  margin-left:20px;
`;


const Bold = styled.p`
  display:inline-block;
  font-weight:bold;
`

export default function UserCard(props) {
    return(
        <Styled>
            <img src={props.avatar_url}/>
            <StyledName>{props.login}</StyledName>
            <StyledInfo>{props.html_url}</StyledInfo>
        </Styled>
    );
}