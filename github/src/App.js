import React from 'react';
import logo from './logo.svg';
import './App.css';
class App extends React.Component{
  constructor(){
    console.log("Constructor");
    super();
    this.state={
        user:[],
        followers:""
    };
  }
componentDidMount(){
  console.log("CDM Running");
  const elements=[
    "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"];
  elements.forEach(
    item=>{
      console.log("item",item);
      axios(`https://api.github.com/users/${item}`)
      .then((res=>{
        console.log("here is the res",res);
      }))
    }
  )
  
}

render(){
  return(
    <div>

    </div>
  )
}
}

export default App;
