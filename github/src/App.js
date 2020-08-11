import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
class App extends React.Component {
  constructor() {
    console.log("Constructor");
    super();
    this.state = {
      user: [],
      followers:[],
      search:""
    };
  }
  componentDidMount() {
    console.log("CDM Running");
    const elements = [
      "tetondan",
      "dustinmyers",
      "justsml",
      "luishrd",
      "bigknell"];


    //  console.log("item",item);
    axios(`https://api.github.com/users/nandhini-madan`)
      .then(res => {
        console.log("here is the res", res.data);
        this.setState({
          ...this.state.user, user: res.data
        });
        console.log("state", this.state);
      })
      .catch(err => {
        console.log("There is a error");
      })

    axios(`https://api.github.com/users/nandhini-madan/followers`)
      .then(res => {
        console.log("here is the follower res", res.data);
        this.setState({
          ...this.state.followers, followers: res.data
        });
        console.log("follower state", this.state.followers);
      })
      .catch(err => {
        console.log("There is a error");
      })

  }

  componentDidUpdate(previouState,PreviousProps){

    if(previouState.user!==this.state.user){
      console.log("User Name changed");
    }
    if(previouState.search!==this.state.search){
      console.log("Search updated");
    }


  }
  handleChange=(e)=>{
    console.log("Handlechange called");
    this.setState({
      ...this.state,search:[e.target.value]
    });
console.log("Search Username",this.search);
  }
search=()=>{

  axios(`https://api.github.com/users/${this.state.search}`)
  .then(res => {
    console.log("here is the res", res.data);
  //  if(res.data.id>0){
      this.setState({
        ...this.state.user, user: res.data
      });
  //  }
   
    console.log("search state", this.state);
  })
  .catch(err => {
    console.log("There is a error");
   
  })

  axios(`https://api.github.com/users/${this.state.search}/followers`)
  .then(res => {
    console.log("here is the follower res", res.data);
    this.setState({
      ...this.state.followers, followers: res.data
    });
    console.log("follower state", this.state.followers.length);
  })
  .catch(err => {
    console.log("There is a error",err);
  })

}


  render() {
    return (
      <div className="App">
        <h1>User Details</h1>
        <input type="text"
         name="search"
         value={this.state.search}
         onChange={this.handleChange}>

        </input>
        <button onClick={this.search}>Search</button>
        <h2>{this.state.user.id}</h2>
        <h3>{this.state.user.name}</h3>
        <img src={this.state.user.avatar_url}></img>
       
        <div>
          {this.state.followers.map((item) => (
            <img width="150"  key={item.id} src={item.avatar_url} />
          ))};
          
        </div>

    
      </div>
    )
  }
}

export default App;
