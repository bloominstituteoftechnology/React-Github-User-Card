import React from 'react';
import axios from 'axios';
import './App.scss';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      followers: [],
      followersInfo: []
    }
  }
  componentDidMount(){

    axios.get('https://api.github.com/users/Wais-A/followers')
    .then(res => {
      console.log(res.data)
      this.setState({followers: res.data})
    })

    // this.state.followers.map((item) =>{
    //  return axios.get(`https://api.github.com/users/${item.login}/followers_url`)
    //   .then(res=> {
    //     console.log(res.data)
    //     this.setState({followersInfo: res.data})
    //   })
    //   .catch(err => console.log(err))
    // })
    }
    

  render(){
    return(
      <div className='app'>
        {this.state.followers.map((item, key)=>{
          return(
            <div className='followerInfo' key={key} >
              <img src={item.avatar_url} alt={item.login}/>
              <h1>{item.login}</h1>
              
            </div>)
        })}
      </div>
    )
  }
}

export default App;
