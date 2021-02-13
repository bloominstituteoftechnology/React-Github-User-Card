import React from 'react';
import { Card, CardContent, Avatar, Typography } from '@material-ui/core';


class User extends React.Component {
  render(){

    const { user } = this.props;

    return (
      <Card>
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
      </Card>
    );
  }
}

export default User;