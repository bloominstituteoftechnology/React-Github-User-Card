import React, { Component, Fragment } from 'react';
import axios from 'axios';
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './components/User';
import Users from './components/Users';
import Search from './components/Search';
import Navbar from './components/Navbar';


import './App.css';

class App extends Component {

  state = {
    user: {},  
    users: [], 
    follower: [],
    loading: false ,  
  }
   
  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${username}`);
    this.setState({ user: res.data, loading: false });
  }
  
  getUserFollower = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${username}/followers`);
    console.log(res.data)
    this.setState({ follower: res.data, loading: false });
    
  }
  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
    this.setState({ users: res.data.items, loading: false });
  };

  
  clearUsers = () => this.setState({ users: [], loading: false });






    render () {
      const { user, users, loading, follower } = this.state; 
      return (
        <Router>
      <div className="App">
      <Navbar />
    
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
          
        <Users loading={loading} users={users} />
       </Fragment>
    )} />

<Route exact path='/user/:login' render={props => (
  <User 
    {...props} 
    getUser={this.getUser}
    getUserFollower={this.getUserFollower}
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






