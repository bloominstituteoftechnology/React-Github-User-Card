import React from 'react';
import UserInfo from './components/UserInfo'
import GitStats from './components/GitStats'
import GitSocial from './components/GitSocial'
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
          <div className="CardHeader">
            <img src="" alt="User Avatar" />
            <h3>User Name</h3>
          </div>

          <div className='userInfo'>
          <UserInfo />
          </div>

          <div className="gitStats">
            <GitStats />
          </div>

          <div className="gitSocial" >
            <GitSocial />
          </div>
        </div>
      </div> );
  }
}
 
export default App;

