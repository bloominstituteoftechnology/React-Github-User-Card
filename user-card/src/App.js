import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"
import Following from './components/follow';
import UserCard from './components/userCard';
 
class App extends React.Component {
  constructor(){
    super();

    this.state = {
      

      userName: "",
      name: '  ',
     userData :  [],
     following: [],
     newUser: [],
     stuff:[]
  };

   

 
 

  }

   changeHandle = (e)=> {

    this.setState ( {[e.target.name]: e.target.value})
 
 
   }


   
  changeName = e=>{
    e.preventDefault();
       
     
      this.setState({name: this.state.name})
      console.log("NAME", this.state.name)
 
  }


  goGetter = (e)=> {
    e.preventDefault();
    const name = this.state.name.trim();
    fetch ( fetch(`https://api.github.com/users/${name}`)
    .then(res => res.json())
    .then(res => this.setState({newUser: res}))
     .then(res=> console.log( "REZZZZ", this.state.newFollowing)))
    .catch(err => console.log(err))
  }

  getFollowing = (e)=> {
    e.preventDefault()
    console.log("DID IT GET PRESSES")
    const name = this.state.name.trim();
    fetch(`https://api.github.com/users/${name}/following`)
    .then(res=> res.json())
    .then(res=> this.setState({following: res}))
    // .then( res=> console.log ("NEW FOLLOWING",res) )
    .catch(err => console.log(err))
    console.log("HAY", this.state.stuff)
     
  }
  

  componentDidMount() {
      //  const name = "Zealll"
       fetch(`https://api.github.com/users/RyanSWest`)
      .then(res => res.json())
 
      .then(res => this.setState({userData: res}))
 
      
        
        .catch(err => console.log ("ERR", err))
         
       
      
 
        //   const name = this.state.name.trim()
        // fetch(`https://api.github.com/users/Zealll/followers`)
        // .then(res => res.json())
        // .then(res=> this.setState({following: res}))
    
        //   .catch(err => console.log(err))
          
        //  const name = this.state.name.trim()

        //  fetch(`https://api.github.com/users/Jorlost19/followers`)
        // //  .then(res => console.log("NEWRES", res))
        // .then(res => res.json())
        // .then(res=> this.setState({newFollowing: res}))
        // .then(res => console.log ("RZA", res))
        // .catch(err => console.log(err))
        // console.log( "NEW FOLLOWING",this.state.newFollowing)

  }


  render(){

    console.log ("STATE", this.state)
  return (
    <div className="App">
      <header className="App-header">
        <h1>React User Card</h1>
       
      </header>

      <UserCard data={this.state.userData} 
      following={this.state.following}
      newFollowing ={this.state.newFollowing}/>

      <Following  following = {this.state.following}/> 
          <h1>{this.state.name}</h1>

      <form type= "submit" onSubmit= {this.changeName}>
        <input
        type= "text"
         name="name"
         value= {this.state.name}
         onChange = {this.changeHandle}
         placeholder="github username"

        
        
        
        
        />

        <h2>{this.state.newUser.login}</h2>
        <h2>{this.state.newUser.id}</h2>
        
      <button type= "submit">ENTER</button>
      <button onClick= {this.goGetter}>GET!!</button>
      <button onClick= {this.getFollowing}>Get Followers!!</button>

      </form>


    </div>
  );}
}

export default App;
