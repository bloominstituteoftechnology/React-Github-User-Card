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
function Followers(props) {
    // console.log(props.followersTotal);
    return (
        <section>
            <h2>
                These are the people following me: ({props.followersTotal} total
                followers){' '}
            </h2>
            {props.followersInfo.map((value) => {
                console.log(value);
                return (
                    <EachSection>
                        {/* <FlexedDiv>
                            {' '}
                            <SmallerAvatar
                                src={value.avatar_url}
                                alt="Avatar URL for selected person"
                            />{' '}
                            <div>
                                {' '}
                                <h4>Hey there I'm {value.name} </h4>
                                <h3>My Github handle is {value.login}</h3>
                                <p>I am located near {value.location}</p>
                            </div>{' '}
                        </FlexedDiv>{' '}
                        <h5>A little bit about me: </h5>
                        <p>{value.bio}</p>
                        <h6>Followers on Github: {value.followers}</h6>
                        <h6>Following: {value.following} </h6>
                        <p>My Github was created on {value.created_at}</p> */}
                    </EachSection>
                );
            })}
        </section>
    );
}

export default Followers;
{
    /* <h4>Name: </h4>
            <h3>Github Handle: </h3>
            <p>Location: </p>
            <img src="" />
            <h5>Bio: </h5>
            <h6>Followers: </h6>
            <h6>Following: </h6>
            <p>Github Created: </p> */
}
