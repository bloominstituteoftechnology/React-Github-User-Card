import React from 'react';
import axios from 'axios';
import Display from '/Users/nadiachilds/Desktop/React-Github-User-Card/src/Display.js'


class App extends React.Component {
  constructor() {
    super()
    this.state = { // initializes state
 username: '',
 followers:''
    }
  }

  componentDidMount() {
    this.getUser()
    this.getFollowers()
  }
getUser = () => {
  axios.get('https://api.github.com/users/littlebogeek')
  .then( results => this.setState ({username:results.data}))
.catch (error => console.log('Whoops! there was an error'))
}
getFollowers = () => {
  axios.get('https://api.github.com/users/littlebogeek')
  .then( results => this.setState ({username:results.data}))
.catch (error => console.log('Whoops! there was an error'))
}

render() {
  return (
    <div className="App">
{this.state.username}
    </div>
  )
}




}


export default App
