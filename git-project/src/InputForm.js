import React from 'react';
import styled from 'styled-components';

export default function InputForm (props) {
    return (
        <StyledFormContainer>
            <form onSubmit={props.submit}>
                    <input
                    type='text'
                    placeholder='Type in a Git username'
                    onChange={props.inputChange}
                    value={props.inputValue}>
                    </input>

                <button>Search!</button>
            </form>
        </StyledFormContainer>
    );
};

const StyledFormContainer = styled.div`
    // border: solid 1px black;
    // margin-top: 4%;
    padding: 2% 0% 2% 0%;
    box-shadow: 0px 2px 5px #acacac;
    background-color: white;

    input {
        padding: .7%;
        width: 25%;
        border: solid 1px #f09bff;
        outline-width: 0;
        color: #f09bff;
    }

    button {
        padding: .7%;
        width: 10%;
        transition: .3s;
        border: solid 1px #f09bff;
        background-color: white;
        color: #f09bff;
        cursor: pointer;
        outline-width: 0;

        :hover {
            // background-color: #f09bff;
            background-color: #f09bff;
            color: white;
        }
    }
`;