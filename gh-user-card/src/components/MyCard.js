import React from 'react';
import styled from 'styled-components';

const EachSection = styled.section`
    border: 1px solid black;
    background: lightgrey;
    width: 80%;
    margin: 2% auto;
    padding: 3% 0 2%;
`;
const SmallerAvatar = styled.img`
    width: 200px;
    height: 200px;
`;
const FlexedDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    margin: 0 auto;
`;
function MyCard(props) {
    return (
        <EachSection>
            <FlexedDiv>
                <SmallerAvatar
                    src={props.myInfo.avatar_url}
                    alt="Avatar URL for selected person"
                />
                <div>
                    {' '}
                    <h4>Hey there I'm {props.myInfo.name} </h4>
                    <h3>My Github handle is {props.myInfo.login}</h3>
                    <p>I am located near {props.myInfo.location}</p>
                </div>{' '}
            </FlexedDiv>
            <h5>A little bit about me: </h5>
            <p>{props.myInfo.bio}</p>
            <FlexedDiv>
                {' '}
                <h6>Followers on Github: {props.myInfo.followers}</h6>
                <h6>Following: {props.myInfo.following} </h6>
            </FlexedDiv>
            <p>My Github was created on {props.myInfo.created_at}</p>
        </EachSection>
    );
}

export default MyCard;
