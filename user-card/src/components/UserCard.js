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
    maxWidth: 335
  }
});

export default function UserCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="user avatar"
          height="300"
          image={props.user.avatar_url}
          title="user avatar"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.user.name}
          </Typography>
          <Typography variant="body1" color="textPrimary" component="p">
            {props.user.bio}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.user.location}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.user.blog}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={props.user.html_url}>
          Profile
        </Button>
        <Button size="small" color="primary" href={props.user.followers_url}>
          Followers
        </Button>
        <Button size="small" color="primary" href={props.user.following_url}>
          Following
        </Button>
        <Button size="small" color="primary" href={props.user.blog}>
          Blog
        </Button>
      </CardActions>
    </Card>
  );
}
