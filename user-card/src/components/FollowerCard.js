import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    marginBottom: 30
  },
  media: {
    height: 250
  }
});

export default function FollowerCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.follower.avatar_url}
          title="user avatar"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.follower.login}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.follower.bio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={props.follower.html_url}>
          Profile
        </Button>
        <Button
          size="small"
          color="primary"
          href={props.follower.followers_url}
        >
          Followers
        </Button>
        <Button
          size="small"
          color="primary"
          href={props.follower.following_url}
        >
          Following
        </Button>
      </CardActions>
    </Card>
  );
}
