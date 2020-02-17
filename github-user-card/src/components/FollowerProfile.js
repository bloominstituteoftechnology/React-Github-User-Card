import React from 'react'
import styled from '@emotion/styled'

const StyledDiv = styled.div`
  border: 2 solid red;
  border-radius: 5%;
  background: skyblue;
  padding: 10%;
  margin: 5%;
`

const StyledCardContainer = styled.div`
  width: 40%;
  border: 2 solid black;
`
const StyledHeader = styled.header`
  margin: 0 auto;
  text-align: center;
  
`

const StyledImg = styled.img`
    width: 90%;
    margin: 0 auto;

`
const StyledBtnDiv = styled.div`
  border-radius: 5%;
  border: 1 solid black;
  background: black;
  width: 40%;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
  padding: 5%;
  color: white;
  &hover {
    cursor: pointer;
    color: black;
    background: white;
  }
`

const Link = styled.a`
  text-decoration: none;
  margin: 10%;
  color: white;
`

const ProfileLink = styled.a`
  text-decoration: none;
  text-align: right;
  font-weight: 800;
  padding: 5%;
`
const FollowerProfile = ({follower}) => {
  console.log(follower)
  console.log(follower.login)
  return(
    <StyledCardContainer>
      <StyledDiv>
        <StyledHeader>
          <h3>{follower.login}</h3>
        </StyledHeader>
       
        <StyledImg 
         src={follower.avatar_url}
         alt={`Github: ${follower.login}`} />
        <p>Profile: 
          <ProfileLink href={follower.url}>
            Click Here!
          </ProfileLink>
        </p>
        <StyledBtnDiv>
          <Link href={follower.html_url}>Github</Link>
        </StyledBtnDiv>
      </StyledDiv>
    </StyledCardContainer>
    
  )
}

export default FollowerProfile;