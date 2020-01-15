import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard.js';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      user: [],
      followersData: []
    };
  }

  componentDidMount(){
    axios
      .get('https://api.github.com/users/christinakal')
      .then(res => {
        
        this.setState({
          user: res.data
        });
      })
      .catch(err => console.log(err)); 

      axios
      .get('https://api.github.com/users/christinakal/followers')
      .then(res => {
        
        this.setState({
          followersData: res.data
        });
        console.log('Followers', res.data);
      })
      .catch(err => console.log(err)); 
  }




  render() {
    return (
      <div>
        <UserCard 
          name={this.state.user.name}
          login={this.state.user.login} 
          img={this.state.user.avatar_url} 
          location={this.state.user.location}
          followers={this.state.user.followers}
          followersData={this.state.followersData}
        />
          
      </div>
    );
  }
}

export default App;
