import React from 'react';
import styled from 'styled-components';

const StyledH3 = styled.h3`
  display: flex;

  font-size: 24px;
  align-items: flex-end;
`;

const UserCard = props => {
  console.log("vr: usercard: props: ", props)
  return (
    <div>
      <StyledH3>{props.users.login}</StyledH3>
      <img src={props.users.avatar_url} alt="followerImage" />
    </div>
  )         
};

 
 
export default UserCard; 