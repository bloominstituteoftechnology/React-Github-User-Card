import React from 'react';
import './App.css';
import CardGrid from './components/cardGrid'

class App extends React.Component {
  state = {
      user: {},
      followers: []
    }

    componentDidMount(){
      fetch('https://api.github.com/users/CelestiaSalinas')
      .then(res => res.json())
      .then(response => this.setState({
        user: response
      }))
      fetch('https://api.github.com/users/CelestiaSalinas/followers')
      .then(res => res.json())
      .then(response => this.setState({
        followers: response
      }))
    }
    render() {
  return (
    
    <div className="App container">
      <CardGrid user={this.state.user} followers={this.state.followers}/>
    </div>
  );
}
}
export default App;
