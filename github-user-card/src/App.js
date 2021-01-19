import React from 'react'
import axios from 'axios'
import './App.css';
import GithubCard from './components/GithubCard'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/ashton-stom')
      .then(res => {
        console.log(res)
        this.setState({user: res.data});
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    console.log("render")
    return (
      <div className="App" >
        {this.state.user !== null ? <GithubCard user={this.state.user} /> : "loading..."}
      </div>
    );
  }
}
export default App;
