import React from 'react'; 
import styled from 'styled-components'; 

const StyledCard = styled.div`

& {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    width: 300px; 
    height: 400px;
    margin: 1%;
    text-align: center; 
}

img {
    width: 90%
}





`

const Card = ({avatar, bio, name}) => {



    return (
        <StyledCard>
            <h1>{name}</h1>
            <img src={avatar} /> 
            <h2>{bio}</h2>
        </StyledCard>
    )
}

export default Card; 