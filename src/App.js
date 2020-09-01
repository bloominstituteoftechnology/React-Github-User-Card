import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import GithubCard from './Components/GithubCard'

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      githubData: [],
      githubFollowers:[],
      githubText: ""
    }
  }

  componentDidMount(){
    axios
      .get('https://api.github.com/users/abdimohamud')
      .then( (response) => {
        console.log(response.data)
        this.setState({
          githubData: response.data
        })
      })
      .catch( (error) =>{
        console.log(error);
       
      });

      axios
      .get('https://api.github.com/users/abdimohamud/followers')
      .then( (response) => {
        console.log(response.data)
        this.setState({
          githubFollowers: response.data
        })
      })
      .catch( (error) =>{
        console.log(error);
       
      });
    }
  
  

  handleChanges = (e) => {
    this.setState({
      githubText: e.target.value
      });
    };
  fetchGithubData = (e) => {
    e.preventDefault();
    axios
    .get(`https://api.github.com/users/${this.state.githubText}`)
    .then( (response) => {
      console.log(response.data)
      this.setState({
        githubData: response.data
      })
    })
    .catch( (error) =>{
      console.log(error);
     
    });
    axios
    .get(`https://api.github.com/users/${this.state.githubText}/followers`)
    .then( (response) => {
      console.log(response.data)
      this.setState({
        githubFollowers: response.data
      })
    })
    .catch( (error) =>{
      console.log(error);
     
    });
    
  };   

  render(){
    return(
      <div className='App'>
        <h1>Github Google</h1>
        <GithubCard githubData={this.state.githubData} githubFollowers={this.state.githubFollowers} />
        <input
          label="github-username"
          type="text"
          value={this.state.githubText}
          onChange={this.handleChanges}
        />
        <button onClick={this.fetchGithubData}>Display Profile</button>
      </div>
    )
  }
}