import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: 'kwnie',
      userData: []
    }
  }

  componentDidMount = () => {

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
