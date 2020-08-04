import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

export default function Followers(props) {
  const {followers} = props;

  return (
    <List>
      <Typography variant="h6">Followers</Typography>
      {followers.map(follower => (
        <ListItem key={follower.id}>
          <ListItemText primary={follower.username}/>
        </ListItem>
      ))}
    </List>
  );
}

//  LocalWords:  ListItemText ListItem
