import React from 'react';
import { StyledCard, FollowerAvatar, StyledCardContent, StyledTypography } from './styles';

class Followers extends React.Component {
  render(){

    const { follower } = this.props;

    return (
        <StyledCard>
          <StyledCardContent>

            <FollowerAvatar src={follower.avatar_url} alt='avatar' />

            <StyledTypography>{follower.login}</StyledTypography>

          </StyledCardContent>
        </StyledCard>
    )
  }
}

export default Followers;