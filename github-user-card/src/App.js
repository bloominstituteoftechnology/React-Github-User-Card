import React from 'react';
import './App.css';
import User from "./components/Users";
import Followers from "./components/Followers";
import githublogo from "./components/githublogo.png"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
  },
  followerlist: {
    justifyContent: "space-between",
    alignItems: "center",

  }
});

function App () {
  const classes = useStyles();

    return (
      <div>
        <div className={classes.header}>
          <img src={githublogo}/>
          <h1>User Card</h1>
        </div>
        <User/>
        <div className={classes.followerlist}>
        <Followers/>
        </div>
      </div>
    )
  }

export default App;
