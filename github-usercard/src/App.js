import React from 'react'
import axios from 'axios'
import './App.css';

class App extends React.Component {
  state = {
    userCard:[],
    followers:[]
  }
  componentDidMount(){
     axios.get(`https://api.github.com/users/treywroberts`)
      .then((res)=>{
        this.setState({
          userCard:res.data
        })
      console.log(res.data.login)
      })
      .catch(err=>{
        console.log(err)
      })
      axios
      .get('https://api.github.com/users/treywroberts/followers')
      .then(res=>this.setState({followers:res.data},console.log(res.data)))
      .catch(err=>console.log(err));

    
  }
  
  render(){
    console.log(this.state.userCard)
    return (
      <div className="App">
      <div className='userCard'>
     <h1>Github Usercard</h1>
        <h2>{this.state.userCard.login}</h2>
        <img className='photo' src = {this.state.userCard.avatar_url} />
        <h4>Information</h4>
        <p>{this.state.userCard.company}</p>
        <p>Followers: {this.state.userCard.followers}</p>
        <p>Following: {this.state.userCard.following}</p>
      </div>
      <div>
        <h2>Followers!</h2>
        {
          this.state.followers.map(item=>(
            <div className='userCard' key ={item.id}>
              <h1>Github Usercard</h1>
              <h2>{item.login}</h2>
              <img className='photo' src={item.avatar_url}/>
              

            </div>
          ))
        }

      </div>
      
    </div>
  );
}
}

export default App;
