import React from 'react';
import styled from 'styled-components';


const Box = styled.div`
align-items:center;
color:white;
max-width: 50%;
height: auto;
padding: 2%;
background-color: #333;
border-radius: 8px;
box-sizing: border-box;
margin: 20px 0;
display: flex;
flex-direction: column;
allign-items: center;
`
const Img = styled.img`
width: 10rem;
height: auto;
`
export default function Card(props){
    return(
        <Box>
            <Img src = {props.userImg}/>
            <h1>{props.name}</h1>
            <h2>{props.username}</h2>
            <a href = "https://github.com/ChristianCorby">{props.profile}</a>
            <h4>Followers {props.followers}</h4>
            <h4>Folowing  {props.following}</h4>
            <p>{props.bio}</p>
        </Box>
    )
} 