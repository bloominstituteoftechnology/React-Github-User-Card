import React from 'react';
import styled from 'styled-components';

const FollowerProf = styled.div`
display: flex;
flex-direction: column;
`;

const FollowerRepo = styled.a`
    margin: 8% 0 0 25%;
    text-decoration: none;
    border: 1px solid cyan;
    color: cyan;
    border-radius: 5px;
    width: 50%;
    padding: 10px 0;

    &:hover {
        background-color: cyan;
        color: whitesmoke;
    }
`;

const FollowerList = ({follow} )=> {
    return (
        <FollowerProf>
            <h3>{follow.login}</h3>
            <img src={follow.avatar_url} alt ="follower profile"/>
            <FollowerRepo href={follow.html_url}>Follower's Repositories</FollowerRepo>
        </FollowerProf>
    )
};

export default FollowerList;