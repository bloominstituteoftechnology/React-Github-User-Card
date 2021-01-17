import React from 'react';
import axios from 'axios';
import UserCard from './Components/UserCard';
import './App.css';

class App extends React.Component {
  state = {
    pic: '',
    name: '',
    followers: []
  };

  componentDidMount() {
    axios.get('https://api.github.com/users/Mitch98k')
    .then(res => {
      //console.log('this is user res:', res)
      this.setState({
        pic: res.data.avatar_url,
        name: res.data.name
      });
    })
    .catch(err => console.log(err));

    axios.get('https://api.github.com/users/Mitch98k/followers')
    .then(res => {
      console.log('this is followers res', res)
      this.setState({
        followers: res.data
      });
    })
    .catch(err => console.log(err));
  };

  render(){
    return (
      <div className="App">
       <UserCard pic={this.state.pic} name={this.state.name} 
       followers={this.state.followers} />
      </div>
    );
  }
  
}

export default App;
