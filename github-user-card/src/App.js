import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: 'kwnie',
      userData: []
    }
  }

  componentDidMount = () => {
    axios.get('https://api.github.com/users/kwnie')
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  componentDidUpdate = () => {

  }

  render(){
    return (
      <div>
        <h1>Github User Cards</h1>
      </div>
    );
  }
}

export default App;
