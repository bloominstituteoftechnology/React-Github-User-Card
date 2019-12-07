import React, { Component } from 'react';
import './App.css';
import User from "./components/Users";
import Followers from "./components/Followers";
import githublogo from "./components/githublogo.png"
import TextField from '@material-ui/core/TextField';
import axios from "axios";
import { withStyles } from '@material-ui/core/styles';
import SearchForm from "./components/SearchForm";

const styles = theme => ({
  header: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
  },
  followerlist: {
    justifyContent: "space-between",
    alignItems: "center",

  },
  search: {
    padding: "20px 290px",
  }
});
class App extends Component {
  constructor() {
    super()
    this.state = {
      user: 'carlostbanks'
    }
  }


    componentDidUpdate(prevProps, prevState) {
      if (prevState.user !== this.state.user) {
        this.setState({ user: [] })
        axios.get(`https://api.github.com/users/${this.state.user}`)
      .then(result => {
        this.setState({
          name: result.data.name,
          img: result.data.avatar_url,
          bio: result.data.bio,
          followers: result.data.followers,
        })
      })
      .catch(error => {
        console.log('error:', error)
      })
      }
    }
  
    handleChange = (event) => {
      event.preventDefault();
      this.setState({
        user: event.target.value
      })
    }

    searchUser = itemText => {
      const newItem = {
        task: itemText,
        completed: false,
        id: Date.now()
      };
      this.setState({
        user: [...this.state.user, newItem]
      });
    };
    

    render() {
      const { classes } = this.props;
      return (
      <div>
        <div className={classes.header}>
          <img src={githublogo} alt="github"/>
          <h1>User Card</h1>
        </div>
        <div className={classes.search}>
        <SearchForm searchUser={this.searchUser}  />
        </div>
        <User/>
        <div className={classes.followerlist}>
        <Followers/>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(App);
