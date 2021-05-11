import React from 'react';
import { StyledCard, StyledCardContent, UserAvatar, StyledTypography } from './styles';
import { Container } from '@material-ui/core';

class User extends React.Component {
  render(){

    const { user } = this.props;

    return (
      <StyledCard>
        <StyledCardContent>

          <UserAvatar src={user.avatar_url} alt='avatar' />

          <Container>
            <StyledTypography>{user.name}</StyledTypography>
            <StyledTypography>{user.login}</StyledTypography>
            <StyledTypography>{user.bio}</StyledTypography>
            <StyledTypography>{user.location}</StyledTypography>
            <StyledTypography>Followers: {user.followers}</StyledTypography>
            <StyledTypography>Following: {user.following}</StyledTypography>
          </Container>
          

        </StyledCardContent>
      </StyledCard>
    );
  }
}

export default User;