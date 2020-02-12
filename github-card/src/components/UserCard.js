import React from 'react';
import styled from 'styled-components';

const OuterDiv = styled.div`
width: 1100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 auto;
background-image: url("https://images.unsplash.com/photo-1491591462767-3b91b2a19487?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjY4Mzg4fQ&auto=format&fit=crop&w=1500&q=80");
background-size: cover;
`;

const UserOuterDiv = styled.div `
background: #FAEA0C;
display: flex;
algn-items: center;
justify-content: center;
max-width: 100%;
margin: 10px;
border-radius: 10px;
border-color: black;
border-width: 5px;
border-style: outset;
box-shadow: 5px 10px #888888;

`;
const UserDiv = styled.div `
display: flex;
align-items: center;
margin-left: 10px;

`;

const UserImage = styled.img`
width: 150px;
height: 150px;
flex-shrink: 2;
object-fit: scale;
border-radius: 20px;


`;

const FollowerOuterDiv = styled.div `
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
max-width: 100%;
margin-bottom: 10px;
`;

const FollowerDiv = styled.div `
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
word-wrap: normal;
padding: 15px;
background-color: #07D2D9;
margin: 20px;
height: 600px;
width: 400px;
object-fit: scale;
border-radius: 10px;
border-color: black;
border-width: 5px;
border-style: outset;
box-shadow: 5px 10px #888888;
`;

const Coolh1 = styled.h1 `
font-size: 80px;
font-weight: bold;
`;

function UserCard (props){

    return(
        <OuterDiv>
            <Coolh1>Welcome to My GitHub Page!</Coolh1>
            <UserOuterDiv>
            {props.userData.map(data => (
                <UserDiv key={data.id}>
                    <UserImage src = {data.avatar_url} alt= {data.name} />
                    <h2>Name: {data.name}</h2>
                    <h2>About: {data.bio}</h2>
                </UserDiv>
            ))}
            </UserOuterDiv>
            <Coolh1>Those Following: {props.user} </Coolh1>
            <FollowerOuterDiv>
                {props.followers.map(follower => (
                    <FollowerDiv key={follower.id}>
                        <UserImage src={follower.avatar_url} alt = {follower.name} />
                        <h2> Name: {follower.name}</h2>
                        <h2> About: {follower.bio}</h2>
                    </FollowerDiv>    
                ))}
            </FollowerOuterDiv>
        </OuterDiv>
    );
}

export default UserCard;
