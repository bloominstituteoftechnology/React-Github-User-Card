import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import MyProfile from './components/MyProfile'

class App extends Component {

  state={
    users: [],
    userText: '',
    error: ''
  }

  componentDidMount(){
axios
.get(`https://api.github.com/users/ebisLab`)
.then(res=>{
  console.log(res, '<--res')
  console.log('res -->', res.data)
  this.setState({
    users: res.data
  })
})
.catch(err=> console.log(err))
  }

  render(){
    return (
      <div className="App">
        <h1>Data from API</h1>
        <MyProfile users={this.state.users}/>
      </div>
    );
  }
  
}

export default App;
