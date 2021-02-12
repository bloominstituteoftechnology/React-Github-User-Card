import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    console.log('App Constructor')
    this.state = {
      user: []
    }
  }

  componentDidMount(){
    //Api Call will go here 
    console.log('App CDM')
  }
  

  componentDidUpdate(){
    console.log('App CDU')
  }
  
  render(){
    console.log('App Rendering')
  return (
    <div className="App">
      <h1>Git Hub User</h1>
    </div>
  );
}
}

export default App;
