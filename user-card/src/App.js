import axios from 'axios';
import './App.css';
import React from 'react';
import UserDetail from './components/UserDetail';
import Followers from './components/Followers';
import Styled from 'styled-components';

const Button = Styled.button`
background: crimson;
border-radius: 3px;
border: 2px solid white;
color: white;
margin: 0.5em 1em;
padding: 0.7em 1em;
`
const Design = Styled.div`
background: crimson;
border-radius: 1px;
border: 6px solid black;
color: white;
text-align: center;
`
class App extends React.Component {
 state = {
  username: '',
  user: [],
  followers: [],
  condition: false
 }

  componentDidMount(){
    axios.get(`https://api.github.com/users/bipin-shrestha`)
         .then(res => {
          console.log(`check here for the component Mount`, res.data) 
          this.setState({ user: res.data});
         })
         .catch(err => console.error(err));
    
    axios.get(`https://api.github.com/users/bipin-shrestha/followers`)
       .then(res => {
         console.log(`check here`, res.data)
         this.setState({ followers: res.data})
       })
       .catch(err => console.error(err));
     
   }

  handleChange =e => {
    this.setState({
      username: e.target.value
    })
  }
  handleClick = e => {
    e.preventDefaul();
      this.props.addTask(this.state.username);
      this.setState({username: ''});
    
  }
  searchUser = e =>{
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.username}`)
         .then(res => {
          console.log('Searching the User in console',res.data)
          this.setState({ user: res.data});
    })
         .catch(err => console.log(err));

    axios.get(`https://api.github.com/users/${this.state.username}/followers`)
         .then(res => {
          console.log('Searching the User-follower in console',res.data)
          this.setState({ followers: res.data});
    })
        .catch(err => console.log(err));
  }
 showFollowers = e => {
   e.preventDefault();
   this.setState({
     condition: !this.state.condition
   })
 }

  render(){
    return (
      <Design>
        <div className="mainPage" style = {{border: '3px solid white', margin: '1rem', backgroundColor: 'black'}}>
          <h1>GITHUB USER</h1>
        <form onSubmit={this.handleClick}>
        <input 
                type='text'
                value={this.state.username}
                onChange={this.handleChange}
              />
              <Button onClick={this.searchUser}>Search Account</Button>
        </form>                
          <UserDetail data={this.state.user}/>   
          <Followers data={this.state.followers} showFollowers={this.showFollowers} condition={this.state.condition} />          
        </div>                              
      </Design>
    );
  }
}

export default App;
