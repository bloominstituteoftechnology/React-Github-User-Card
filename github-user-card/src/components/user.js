import React from 'react';
import { Card, CardContent, Avatar, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const StyledCard = styled(Card)({
  width: '35%',
  padding: '2%',
  margin: '2%',
});

class User extends React.Component {
  render(){

    const { user } = this.props;

    return (
      <StyledCard>
        <CardContent>

          <Avatar src={user.avatar_url} alt='avatar' />

          <Typography>{user.name}</Typography>
          <Typography>{user.login}</Typography>
          <Typography>{user.bio}</Typography>
          <Typography>{user.location}</Typography>
          <Typography>{user.company}</Typography>
          <Typography>{user.blog}</Typography>
          <Typography>{user.email}</Typography>
          <Typography>Followers: {user.followers}</Typography>
          <Typography>Following: {user.following}</Typography>

        </CardContent>
      </StyledCard>
    );
  }
}

export default User;