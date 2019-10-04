import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <h1>Lambda Students in Github</h1>
      <div>
        {this.state.images.map((image, index) => (
          <img key={index} src={image} alt="Cohorts" />
        ))}
      </div>
    )
  }
}

export default App;