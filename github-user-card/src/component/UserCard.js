import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    color: white;
    background-color: grey;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
`
const StyledImage = styled.img`
    border-radius: 50%;
    outline: 3px solid black;
    width: 30%;
    height: auto;

`

function UserCard (props) {
    return(
        <div className="MainHeader">
            <StyledDiv className="MainUser">
                <p>...this is my information...</p>
                <h3>login: {props.dataSet.login} </h3>
                <p>name: {props.dataSet.name}</p>
                <img src={props.dataSet.avatar_url} alt={props.dataSet.login}/>
            </StyledDiv>
        </div>
    );
};

export default UserCard