import React from 'react';
import './App.css';
import Header from './compnents/Header';

class App extends React.Component {
  constructor() {
    super();

  }
  componentDidMount() {
    fetch("https://api.github.com/users/ + JenVest2020")
      .then(res =>
        console.log('from CDM', res))
    //     .then(dogs => this.setState({ doggos: dogs.message }))
    //     .catch(err => console.log("noooo"))
    // };
    render() {
      return (
        <div className='App-header'>
          <Header />
        </div>
      );
    }
  };

  export default App;
