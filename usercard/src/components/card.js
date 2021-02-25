import React from 'react'
import styled from 'styled-components'

function Card(props) {
    return (
        <ExtraCard>
            <StyledCard>
                <TopDiv>
                    <ProfilePic src={props.user['avatar_url']} alt='avatar'/>
                    <Name>{props.user.name}<br /><StyledSpan>{' (' + props.user.login + ')'}</StyledSpan></Name>
                </TopDiv>
                <BioDiv>
                    <p>{props.user.bio}</p>
                </BioDiv>
                <InfoDiv>
                    <StyledThird>{props.followers.length === 0 ? 'No current following' : props.followers.length + ' followers'}</StyledThird>
                    <StyledThird>{props.user.following === 0 ? 'Not following anyone' : 'Following ' + props.user.following + ' people'}</StyledThird>
                    <StyledThird><span className='fas fa-map-marker-alt'></span> {props.user.location}</StyledThird>
                    <StyledLink href={props.user['html_url']} target='_blank'>Full Github Page</StyledLink>
                </InfoDiv>
            </StyledCard>
        </ExtraCard>
    )
}
const ExtraCard = styled.div`
    width: 600px;
    height: 600px;
    margin: 50px auto;
    box-shadow: -20px 20px #698996;
    box-sizing: border-box;
`;
const StyledCard = styled.div`
    width: 600px;
    height: 600px;
    margin: 50px auto;
    padding: 20px 10px;
    background-color: #97B1A6;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: sans-serif;
    box-shadow: -10px 10px #407076;
    box-sizing: border-box;
`;
const ProfilePic = styled.img`
    border: 6px solid white;
    border-radius: 50%;
    margin-bottom: 10px;
    width: 200px;
`;
const TopDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    font-size: 1.2rem;
    padding-bottom: 10px;
    width: 75%;
    border-bottom: 2px dashed white;
`;
const Name = styled.h2`
    text-align: center;
`;
const BioDiv = styled.div`
    width: 75%;
    text-align: center;
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 50px;
    font-size: 1.1rem;
`;
const InfoDiv = styled.div`
    font-size: .9rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    text-align: left;
    width: 80%;
    box-sizing: border-box;
    padding: 5px 0 5px 25px;
    background-color: #407076;
    box-shadow: -10px 10px #698996;
`;
const StyledThird = styled.h3`
    width: 50%;
    text-align: left;
    box-sizing: border-box;
    margin: 10px 0;
`;
const StyledLink = styled.a`
    width: 50%;
    box-sizing: border-box;
    margin: 10px 0;
    color: white;
    font-size: 1.1rem;
    font-weight: bold;
    text-decoration: none;
`;
const StyledSpan = styled.span`
    font-weight: lighter;
    font-size: 1.4rem;
`;

export default Card;