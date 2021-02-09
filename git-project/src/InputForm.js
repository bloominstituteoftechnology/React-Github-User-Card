import React from 'react';
import styled from 'styled-components';

export default function InputForm (props) {
    return (
        <StyledFormContainer>
            <form onSubmit={props.submit}>
                    <input
                    type='text'
                    placeholder='Type in a Git username'
                    onChange={props.inputChange}>
                    </input>

                <button>Search!</button>
            </form>
        </StyledFormContainer>
    );
};

const StyledFormContainer = styled.div`
    // border: solid 1px black;
    margin-top: 4%;

    input {
        padding: .5%;
        width: 25%;
    }

    button {
        padding: .5%;
        width: 10%;
        transition: .3s;

        :hover {
            color: red;
        }
    }
`;