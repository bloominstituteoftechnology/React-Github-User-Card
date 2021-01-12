import './App.css';
import React from 'react'
import axios from 'axios'
class App extends React.Component{
  
  state={
    githubData:{}
  }


  componentDidMount(){
    axios.get("https://api.github.com/users/sebastian-espeset")
      .then((res)=>{
        // console.log(res.data)
        this.setState({
          githubData:res.data
        })
        console.log(this.state)
      })
      .catch((err)=>{
        console.log(err)
      })
  }
  
  render(){
    return(
      <div>
        <header>GitHub UserCard Project</header>
        <h1>Welcome {this.state.githubData.name}</h1>
        <p><img width="200px" height="200px"src={this.state.githubData.avatar_url} key={this.state.githubData.avatar_url}/></p>
      </div>
    )
  }
}
export default App;
       



