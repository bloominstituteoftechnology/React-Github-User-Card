import './App.css';
import React from 'react'
import axios from 'axios'
import Search from './components/Search'
import UserCard from './components/UserCard'
import Follower from './components/Follower'


class App extends React.Component {

  //Declaring State------------------------------------------------------------
  state = {
    user: 'CatRadin',
    followers: []
  }
//When the component mounts this executes fetching form the API using Axios---------------------------------------
componentDidMount () {
  axios 
  .get(`https://api.github.com/users/${this.state.user}`)
  .then(response => {
    this.setState({
      user: response.data
    })
    return axios.get(response.data.followers_url);
  })
  .then(response => {
    this.setState({
      followers: response.data
    });
  })
  .catch(error =>{
    console.log(error)
  })
}
//Component Did Update------------------------------------------------------------------------------------------
componentDidUpdate(prevProps, prevState) {
  if (prevState.user !== this.state.user) {
    axios
    .get(`https://api.github.com/users/${this.state.user}`)
    .then(response => {
      this.setState({
        user: response.data
      });
      return axios.get(response.data.followers_url)
    })
    .then(response => {
      this.setState({
        followers: response.data
      });
    })
    .catch(error => {
      console.log(error)
    })
  }
}
//Search --------------------------------------------------------
searchUser = (query) => {
  this.setState({
    user: query
  })
}
//Render----------------------------------------------------------
render(){
  return(
    <div className="App">
      <h1>GitHub User <span>Card</span></h1>
      <Search searchUser={this.searchUser} />
      <div className="container">
        <UserCard 
        user={this.state.user}
        followers={this.state.followers}
        />
        <div className="followersContainer">
          {this.state.followers.map(item => (
            <Follower key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
    )
  }
}


export default App;
