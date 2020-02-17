import React from 'react'
import styled from 'styled-components'

const StyledLi = styled.li`
  list-style-type: none;
`
const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
`
const StyledDiv = styled.div`
  width: 75%;
  padding: 2%;
  margin: 0 auto;
  background: powderblue;
  border: 1 solid black;
  box-shadow: 5px 7px 5px #888888;
  border-radius: 5%;
`
const StyledImg = styled.img`
  width: 40%;
`
const UserProfile = ({user}) => {
  console.log(user)
  const userCompany = user.company === null ? "None": user.company
  const userEmail = user.email === null ? "Not Provided": user.email
  const userBio = user.bio === null ? "Not Provided": user.bio

  return(
    <StyledDiv>
      <h1>{user.name}</h1>
      <StyledImg 
        src={user.avatar_url} alt={user.name}
      /> <br/>
      <StyledUl>
        <StyledLi>Company: {userCompany}</StyledLi> <br/>
        <StyledLi>Location: {user.location}</StyledLi> <br/>
        <StyledLi>Email: {userEmail}</StyledLi><br/>
        <StyledLi>Bio: {userBio}</StyledLi><br/>
        <StyledLi>Followers: {user.followers} </StyledLi><br/>
        <StyledLi>Following: {user.following} </StyledLi>

      </StyledUl>


     </StyledDiv>
  )
}

export default UserProfile;