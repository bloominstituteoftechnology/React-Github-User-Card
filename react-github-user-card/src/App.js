import React from 'react';
import User from './Components/User'
// import Followers from './Components/Followers'

class App extends React.Component {



  render() {
    return (
      <div className="App">
        Hello World!
        <User />
        {/* <Followers /> */}
      </div>
    );
  }
}

export default App;
