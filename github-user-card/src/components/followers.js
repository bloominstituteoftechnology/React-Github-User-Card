import React from 'react';
import { Card, CardContent, Avatar, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const StyledCard = styled(Card)({
  width: '25%',
  padding: '2%',
  margin: '2%',
});

class Followers extends React.Component {
  render(){

    const { follower } = this.props;

    return (
        <StyledCard>
          <CardContent>

            <Avatar src={follower.avatar_url} alt='avatar' />

            <Typography>{follower.login}</Typography>

          </CardContent>
        </StyledCard>
    )
  }
}

export default Followers;