import React from 'react';
import axios from 'axios';
import './App.scss';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      followers: []
    }
  }
  componentDidMount(){
    axios.get('https://api.github.com/users/Wais-A/followers')
    .then(res => {
      console.log(res.data)
      this.setState({followers: res.data})
    })
  }

  render(){
    return(
      <div className='app'>
        {this.state.followers.map((item, key)=>{
          return(
            <div className='followerInfo' key={key} alt={item.login}>
              <img src={item.avatar_url}/>
              <h1>{item.login}</h1>
            </div>)
        })}
      </div>
    )
  }
}

export default App;
