import React, { Component, Fragment } from 'react';
import axios from 'axios';
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './components/User';
import Users from './components/Users';
import Search from './components/Search';
import Navbar from './components/Navbar';
import About from './pages/About';

import './App.css';

class App extends Component {

  state = {
    users: [], //all users are and array of objects
    user: {},  //single user is empty object
    repos: [], //change to followers
    follows: [],
    loading: false ,
       
  }
   
  //Search Github Users
  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
    this.setState({ users: res.data.items, loading: false });
  };

  //Clear Github Users from Search
  clearUsers = () => this.setState({ users: [], loading: false });

  //get single github User
  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${username}`);
    this.setState({ user: res.data, loading: false });
  }

  //get users Repos ...later change to followers

  getUserRepos = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);
    this.setState({ repos: res.data, loading: false });
  }

  //get user Followers
  

  getUserFollower = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${username}/followers`);
    this.setState({ follower: res.data, loading: false });
  }

    render () {
      const { user, users, loading, repos, follower } = this.state; //change repos to follow
      return (
        <Router>
      <div className="App">
      <Navbar />
      {/* <User getUser={this.getUser} user={user} loading={loading} /> */}
     <div className='container'>
    <Switch> 
    <Route 
      exact path='/' 
      render={props => (
      <Fragment>
        <Search 
          searchUsers={this.searchUsers} 
          clearUsers={this.clearUsers} 
          showClear={users.length > 0 ? true : false} 
        />
           {/* //pass in loading and users as props */}
        <Users loading={loading} users={users} />
       </Fragment>
    )} />

     {/* //rendering single page component */}
     <Route exact path='/about' component={About} />

<Route exact path='/user/:login' render={props => (
  //add whatever props, use getUser method, send in the user state, set loading
  <User 
    {...props} 
    getUser={this.getUser}
    getUserRepos={this.getUserRepos} //change to followers
    getUserFollower={this.getUserFollower}
    repos={repos} //change to followers
    follower={follower}
    user={user} 
    loading={loading}
  />
)}/>

       </Switch>
       </div>
      </div>
      </Router>
    );
  }
};

export default App;
