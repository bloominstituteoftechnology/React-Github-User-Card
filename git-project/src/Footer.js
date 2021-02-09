import React from 'react';
import styled from 'styled-components';

export default function Footer (props) {
    return (
        <StyledFooterContainer>
            <p>&copy; Anthony Catanzariti's super cool footer!</p>
        </StyledFooterContainer>
    );
};

const StyledFooterContainer = styled.div`
    background-color: white;
    padding: 1%;
    // border: solid 1px blue;
    box-shadow: 0px -2px 5px #acacac;
`;