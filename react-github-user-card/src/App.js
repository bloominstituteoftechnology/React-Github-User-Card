import React from 'react';
import axios from 'axios';


class App extends React.Component {
//constructor to set state
  constructor(){
    super();
    this.state= {
      users: []
    }
  }


  componentDidMount(){
    axios
    .get("https://api.github.com/users/erictaylor103")
    .then(response => {
      this.setState({
        users: response.data
      });
      console.log(response.data)
      
    })
    .catch(error => console.log(error));
  }



  render(){
    return (
      <div className="App">
        <h1>Github User</h1>
        </div>
      
    );
  }


}

export default App;

