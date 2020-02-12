import React from 'react';
import styled from 'styled-components';

const OuterDiv = styled.div`
height: 400px;
width: 400px;
display: flex;
flex-direction: column;
align-items: center;
align-content: center
background: yellow;

`;
const UserDiv = styled.div `

`;

const UserImage = styled.image`

`;

function UserCard (props){

    return(
        <OuterDiv>
            <div>
            <h1>User Card</h1>
            {props.userData.map(data => (
                <UserDiv key={data.id}>
                    <UserImage src = {data.avatars_url} alt= {data.name} />
                    <h2>Name: {data.name}</h2>
                    <h2>About: {data.bio}</h2>
                </UserDiv>
            ))}
            </div>
            <h1>{props.user} Those Who are Following</h1>
            <div>
                {props.followers.map(follower => (
                    <div key={follower.id}>
                        <UserImage src={follower.avatar_url} alt = {follower.name} />
                        <h2> Name: {follower.name}</h2>
                        <h2> About: {follower.bio}</h2>
                    </div>    
                ))}
            </div>
        </OuterDiv>
    );
}

export default UserCard;
