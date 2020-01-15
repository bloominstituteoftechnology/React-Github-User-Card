import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));

function UserCard(props) {
  const classes = useStyles();
  const theme = useTheme();
  console.log(props.login);

  return (
    <div className="userCards">
      <Card className={classes.card} key={props.id}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              GitHub User Card
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {props.login}
            </Typography>
            <IconButton href={"www.github.com/" + props.login} target="_new">
              <GitHubIcon />
            </IconButton>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={props.avatar_url}
          title="Profile Picture"
        />
      </Card>
    </div>
  );
}

export default UserCard;
