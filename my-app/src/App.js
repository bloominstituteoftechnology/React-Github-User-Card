import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    }
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/cmirza')
      .then(response => {
        console.log(response);
        this.setState({ user: response.data });
      })
      .catch(error => console.error(error))

    axios
      .get('https://api.github.com/users/cmirza/followers')
      .then(response => {
        console.log(response);
        this.setState({ followers: response.data });
      })
      .catch(error => console.error(error))
  };



  render(){
    console.log(this.state)
    return (
      
      <div className='App'>
        <div>
          <h1>GitHub Followers</h1>
        </div>
      </div>
    );
  }

}

export default App;
