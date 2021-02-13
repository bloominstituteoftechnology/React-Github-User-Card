import React from 'react';
import UserInfo from './components/UserInfo'
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

        <div className="userCard">
          <div>
            <img src="" alt="User Avatar" />
            <h3>User Name</h3>
          </div>
          <div className='userInfo'>
          <UserInfo />
          </div>
        </div>
      </div> );
  }
}
 
export default App;

