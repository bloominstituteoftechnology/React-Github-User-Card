import React from 'react';
import axios from "axios";
import './App.css';

const user = [];
const followers= [];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username:"",
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
    .get(`https://api/github.com/users/kendra4227`)
    .then((res)=>{
      this.setState({
        ...this.state,
        user:res.data.message
      })
    .catch((err)=> console.log("Error has occured",err));
    });
  };

  componentDidUpdate(PrevState){
    if(PrevState !== this.state.user){
      console.log("User has changed")
    }
  };

  getUser = () =>{
    axios
    .get(`https://api.githiub.com/users/$(this.state.username)`)

    .then((res)=>{
      this.setState({
        ...this.state,
        username:"",
        user:res.data.message
      });
    })
    .catch((err) => console.log("Error occured again",err))
  };

  render() {
    return(
      <div className ="App">
        <h1>Github User</h1>
      </div>
    );
  } 
}

export default App;
