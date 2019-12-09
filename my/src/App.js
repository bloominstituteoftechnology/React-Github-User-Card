import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super()
      this.state = {
        users: 'users',
        followers: []
      }
  }

  componentDidMount() {
    this.fetchFollowers()
  };


  componentDidUpdate(prevProps, prevState) {
    if(prevState.followers !== this.state.followers) {
      this.setState({
       followers: []
    })    
     this.fetchFollowers()
  };
};

  fetchFollowers = () => {
    axios.get(`https://api.github.com/${this.state.users}/hdnye/followers`)
    .then(res => {
      this.setState({
       followers: res.data.message
      })
      console.log(res);
    })
    .catch(err => {
      console.log('error:', err)
    })
  }

  handleChange = (event) => {
    this.setState({
      users: event.target.value
    })
  }


  render() {
    return (
      <div>
      <h1>GitHub User Card</h1>
        <select value={this.state.users} onChange={this.handleChange}>
          <option value='users'>User</option>
          <option value='followers'>Followers</option>        
           </select>
          <div>
            {this.state.followers && this.state.followers.map((follower, index) => (
              <img key={index} src={follower} alt='Follower' />
            ))}
         </div>
       </div>   
    )
  }
}

export default App;
