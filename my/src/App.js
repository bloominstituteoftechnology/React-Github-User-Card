import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super()
      this.state = {
        users: 'users',
        followers: 'followers'
      }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/hdnye`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log('error:', err)
      })
  }

  handleChange = (event) => {
    this.setState({
      users: event.target.value,
      followers: event.targe.value
    })
  }


  render() {
    return (
      <>
      <h1>GitHub User Card</h1>
        <select value={this.state.user} onChange={this.handleChange}>
          <option value='users'>User</option>
          <option value='followers'>Followers</option>        
        </select>
      </>
    )
  }
}













export default App;
