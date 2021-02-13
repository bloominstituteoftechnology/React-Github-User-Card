import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      user: []
    }
  }
  render() { 
    return ( 
      <div className='App'>
        <h1>Github User</h1>
      </div> );
  }
}
 
export default App;

