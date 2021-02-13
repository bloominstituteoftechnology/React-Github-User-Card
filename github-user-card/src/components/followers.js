import React from 'react';
import { Card, CardContent, Avatar, Typography } from '@material-ui/core';

class Followers extends React.Component {
  render(){

    const { follower } = this.props;

    return (
      <Card>
        <CardContent>

          <Avatar src={follower.avatar_url} alt='avatar' />

          <Typography>{follower.login}</Typography>

        </CardContent>
      </Card>
    )
  }
}

export default Followers;