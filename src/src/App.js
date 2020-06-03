import React, { Component, Fragment } from 'react';
import axios from 'axios';
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './components/User';
import Users from './components/Users';
import Search from './components/Search';
import About from './pages/About';
import './App.css';

class App extends Component {

  state = {
    users: [], //all users are and array of objects
    user: {},  //single user is empty object
    loading: false    
  }
  //start lifecycle method
  //call to api using axios

  // async componentDidMount() {
  //   this.setState({ loading: true });

  //   const res = await axios.get('https://api.github.com/users');

  //   this.setState({ users: res.data, loading: false });
  // }

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

    render () {
      const { user, users, loading } = this.state;
      return (
        <Router>
      <div className="App">
      <h1> Github User built with React</h1>
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


    <User getUser={this.getUser} user={user} loading={loading} />

   

       </Switch>
       </div>
      </div>
      </Router>
    );
  }
};

export default App;
