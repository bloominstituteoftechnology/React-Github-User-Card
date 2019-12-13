import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    color: white;
    background-color: grey;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
`


function UserCard (props) {
    return(
        <StyledDiv className="MainUser">
            <p>...this is my information...</p>
            <h3>login: {props.dataSet.login} </h3>
            <p>name: {props.dataSet.name}</p>
        </StyledDiv>
    );
};

export default UserCard