import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';


class App extends React.Component {
//constructor to set state
  constructor(){
    super();
    this.state= {
      userData: []
    }
  }


  componentDidMount(){
    axios
    .get("https://api.github.com/users/erictaylor103")
    .then(response => {
      this.setState({
        userData: response.data
      });
      console.log(response.data)
      
    })
    .catch(error => console.log(error));
  }



  render(){
    return (
      <div className="App">
        <h1>Github User</h1>
        <UserCard userData={this.state.userData}></UserCard>
      </div>
      
    );
  }


}

export default App;

