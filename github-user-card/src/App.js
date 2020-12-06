import React from 'react';
import axios from "axios";
import { Button, Form, Input } from 'reactstrap';
import UserCard from './components/userCard';
import FollowerCard from './components/followerCard';
import './App.css';

const user = [];
const followers= [];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username:"kendra4227",
      user:[],
      followers:[]
    };
  };
  handleChange = (e) =>{
console.log(e.target.value)
this.setState({
  ...this.state,
  username:e.target.value
});
  };

  componentDidMount(){
    console.log("Component did mount");
    axios
    .get(`https://api.github.com/users/kendra4227`)
    .then((res)=>{
      console.log("Res",res.data)
      this.setState({
        ...this.state,
        user:res.data
      });
      console.log("User",user,followers);
      this.getFollowers()
    })

    .catch((err)=> console.log("Error has occured",err));
                             
  };

  componentDidUpdate(PrevState){
    if(PrevState !== this.state.user){
      console.log("Component did Update");
    }
  };

  getUser = () =>{
    axios
    .get(`https://api.githiub.com/users/$(this.state.username)`)

    .then((res)=>{
      this.setState({
        ...this.state,
        user:res.data
      });
      console.log(user);
      this.getFollower();
    })
    .catch((err) => console.log("Error occured again",err))
  };
  getFollowers = () => {
    axios
      .get(`https://api.github.com/users/${this.state.username}/followers`)
      .then((res => {
        console.log("followers", res.data);
        this.setState({
          ...this.state,
          username: "",
          followers: res.data
        });
      }))
      .catch((err) => {
        console.log("Error 3", err);
      });
  };


  render() {
    return(
      <div className="app">
<div className ="header">
        <h1>Github User</h1>
        <Form>
            <Input type="text" className="user-search" onChange={this.handleChange} value={this.state.username} placeholder="Github Username" />
            <Button className="formButton" color="info"  onClick={this.getUser} >Find User</Button>
          </Form>
</div>
        <div className="userContainer">
          <UserCard user={this.state.user} />
        </div>

        <div>
          <FollowerCard followers={this.state.followers} />
        </div>
      </div>  

    );
  } 
}

export default App;
