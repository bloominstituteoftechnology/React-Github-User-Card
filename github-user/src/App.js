import React from 'react';
import './App.css';
import GithubList from './components/GithubList'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import GithubCard from './components/GithubCard';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      follower: []
    }
  }
  componentDidMount() {
    axios
    .get( 'https://api.github.com/users/timmitzen/followers')
    .then(response=>{
      this.setState({
        
       follower: response.data
      })
    })
    .catch(error=>{
      console.log(error)
    })
  }
  
  render(){
    return(
      <>
        <h2>Github Followers</h2>
      <div className='container'>
        <GithubList followers={this.state.follower}/>
        
      </div>
      </>
    );
  }
}


export default App;
