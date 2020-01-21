import React from 'react';
import NavigationBar from './Components/NavigationBar'
import Followers from './Components/Followers';
import MyUserCard from './Components/MyUserCard';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div className="App">    
      <NavigationBar />
      <Followers />
      <MyUserCard />    
      </div>                                 
    ); 
  }
}
export default App;
