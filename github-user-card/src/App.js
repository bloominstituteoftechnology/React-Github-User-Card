import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard.js';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      user: [],
      followers: []
    };
  }

  componentDidMount(){
    axios
      .get('https://api.github.com/users/christinakal')
      .then(res => {
        
        this.setState({
          user: res.data
        });
        console.log('User', res.data);
      })
      .catch(err => console.log(err)); 

      axios
      .get('https://api.github.com/users/christinakal/followers')
      .then(res => {
        
        // this.setState({
        //   followers: res.data
        // });
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
        />
          
      </div>
    );
  }
}

export default App;
