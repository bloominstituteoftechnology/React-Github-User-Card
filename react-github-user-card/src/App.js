import React, { Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import axios from 'axios'



class App extends Component{
  state = {
    users: [],
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

  //clear users from state 
  clearUsers = () => this.setState({ users: [], loading: false});

  // validation 
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type}})

    // Alert disappears after 4 seconds
    setTimeout(() => this.setState({ alert: null}), 4000);
  }

  render() {
    return (
      <div className='App'>
       <Navbar /> 
       <div className="container">
        <Alert alert={this.state.alert} />
         <Search 
         searchUsers={this.searchUsers} 
         clearUsers={this.clearUsers} 
         setAlert={this.setAlert}
         />
        <Users loading={this.state.loading} users={this.state.users} />
       </div>
       
      </div>
    );
  }
}

export default App;
