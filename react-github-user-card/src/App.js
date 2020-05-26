import React, { Component, Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import User from './components/users/User'

import axios from 'axios'

class App extends Component{
  state = {
    users: [],
    user: {},
    repos:[],
    // set the initial state of loading to false
    loading: false,
    alert: null
  };

  async componentDidMount(){
    //  prior to api call set loading to true
    this.setState({ loading: true });

    const res = await axios
    .get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    // after the api call populates data set user to equal res data (the information returned from the axios call and loading back to false)
    this.setState({users: res.data, loading: false});
  }

  // search functionality
  searchUsers =   async text => {
    this.setState({ loading: true });
    const res = await axios
    .get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    // after the api call populates data set user to equal res data (the information returned from the axios call and loading back to false)
    this.setState({users: res.data.items, loading: false});
  }

  // get single GitHub user
  getUser = async (username) => {
    this.setState({ loading: true });

    const res = await axios
    .get
    (`https://api.github.com/users/${username}?client_id=${
      process.env.REACT_APP_GITHUB_CLIENT_ID
    }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ user: res.data, loading: false });
  }

  // Get Users repos
  getUserRepos = async username => {
    this.setState({ loading: true });

    const res = await axios
    .get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${
      process.env.REACT_APP_GITHUB_CLIENT_ID
    }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({repos: res.data, loading: false});
  }

  //clear users from state 
  clearUsers = () => this.setState({ users: [], loading: false});

  // validation 
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type}})

    // Alert disappears after 4 seconds
    setTimeout(() => this.setState({ alert: null}), 4000);
  }

  render() {
    const {users, user, repos, loading } = this.state;
    return (
      <Router>
         <div className='App'>
       <Navbar /> 
       <div className="container">
        <Alert alert={this.state.alert} />
        <Switch>
          <Route
            exact path ='/'
            render={props => (
              <Fragment>
                <Search 
                        searchUsers={this.searchUsers} 
                        clearUsers={this.clearUsers} 
                        setAlert={this.setAlert}
                        />
                  <Users loading={loading} users={users} />
              </Fragment>
            )}
          ></Route>

          <Route exact path ='/about'  component={About}/>
          <Route axact path='/user/:login' render={props => (
            <User {... props} 
            getUser={this.getUser} 
            getUserRepos={this.getUserRepos}
            user={user} 
            repos={repos}
            loading={loading}
            />
          )} />

          
        </Switch>
        
       </div>
      </div>
      </Router>
    );
  }
}

export default App;
