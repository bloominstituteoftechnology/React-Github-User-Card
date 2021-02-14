import React from 'react';
import { StyledCard, StyledCardContent, UserAvatar, StyledTypography, TypographyContainer } from './styles';

class User extends React.Component {
  render(){

    const { user } = this.props;

    return (
      <StyledCard>
        <StyledCardContent>

          <UserAvatar src={user.avatar_url} alt='avatar' />

          <TypographyContainer>
            <StyledTypography>{user.name}</StyledTypography>
            <StyledTypography>{user.login}</StyledTypography>
            <StyledTypography>{user.bio}</StyledTypography>
            <StyledTypography>{user.location}</StyledTypography>
            <StyledTypography>Followers: {user.followers}</StyledTypography>
            <StyledTypography>Following: {user.following}</StyledTypography>
          </TypographyContainer>
          

        </StyledCardContent>
      </StyledCard>
    );
  }
}

export default User;