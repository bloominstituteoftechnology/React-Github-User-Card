import React from 'react';
import users from './components/users';
import userCard from './components/usercard';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to Github User Card!</h1>
      </div>
    );
  }
}

export default App;
