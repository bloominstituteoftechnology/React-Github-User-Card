import React from "react";
import Followers from "./Followers";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  })
);

function User({ username, followers }) {
  const classes = useStyles();
  const { avatar_url, name } = username;
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            {" "}
            <img src={avatar_url} alt="profile" /> <br />
            Username : {name}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {followers.map(follower => (
              <Followers name={follower.login} image={follower.avatar_url} />
            ))}
           </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default User;
