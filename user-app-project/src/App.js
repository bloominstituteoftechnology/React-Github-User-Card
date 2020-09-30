import React from 'react';
import './App.css';
import axios from 'axios'


class App extends React.Component {
  state= {
    user: {},
    followers: [],
    userText:'',
    error:'',

  };
  componentDidMount(){
    axios.get('https://api.github.com/users/fibonacci85')
    .then(res => {
      console.log(res.data)
      this.setState({
        user: res.data
      });
    })
    .catch(err => console.log(err));
    axios.get('https://api.github.com/users/fibonacci85/followers')
    .then(res=>{
      this.setState({
        followers:res.data
      });
    })
    .catch(err=> console.log(err));
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.user !== this.state.user){
        this.fetchUsers= e => {
          e.preventDefault()
          axios.get(`https://api.github.com/users/${this.state.userText}`)
        .then(res =>{
          this.setState({
            user:res.data
          });
        })
        .catch(err => console.log(err));
        axios.get(`https://api.github.com/users/${this.state.userText}/followers`)
        .then(res =>{
          this.setState({
            followers:res.data
          });
        })
        .catch(err => console.log(err));
    }
        }
  }


handleChanges = e =>{
  this.setState({
    userText: e.target.value
  });
};

render() {
  return (
    <div className='App'>

      <h1>GitHub Users</h1>

      <div className="user">
          <h1>{this.state.user.login}</h1>
          <div className="userBox">
              <img src={this.state.user.avatar_url} width="200"/>
              <div className="about">
                  <p>Name:{this.state.user.name}</p>
                  <p>About:{this.state.user.bio}</p>
                  <p>Followers:{this.state.user.followers}</p>
                  <p>Following:{this.state.user.following}</p>
                  <p>Location:{this.state.user.location}</p>
              </div>
          </div>
      </div>

      <br/>

      <form>
      <input
        type="text"
        placeholder="Enter Username"
        value={this.state.userText}
        onChange={this.handleChanges}
      />
      <button onClick={this.fetchUsers}>Get Users</button>
      </form>

      <br/>

      {/* {this.state.error && <p style={{color: 'red' }}>{this.state.error}</p>} */}
        
        {this.state.followers.map(follower=>(
          <div className='followers'>
            <img src= {follower.avatar_url} width="200" />
            <p>{follower.login}</p>
          </div>
        ))}

    </div>
  );
}
}
export default App;
