import logo from './logo.svg';
import './App.css';
import Usercard from './components/Usercard'
import React from 'react'
import axios from 'axios'

class App extends React.Component {

  constructor() {
    super();
      this.state = {
        gitUsers: [],
        input: ''
      }
  }
  
  
  componentDidMount () {
    axios.get('https://api.github.com/users/mojombo')
    .then((res) => {
      console.log(res.data)
      this.setState({
        gitUsers: [res.data]
      })
      console.log('state ',this.state.gitUsers.length)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  onChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.input}`)
    .then((res) => {
      console.log(res)
      this.setState({
        gitUsers: res.data
      })
    })
    .catch((err) => {
      console.log(err)
      alert('User does not exist')
    })
    this.setState({
      input: ''
    })
  }

  render() {
    
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>
            Search for a User:
            <input 
            value={this.state.input}
            placeholder='search for a user'
            onChange={this.onChange}
            />
          </label>
          <button>Search</button>
        </form>
        <h1>Github usercards</h1>
        <div className='card'>
        { 
        this.state.gitUsers.length === 1 && 

          <div>
            <h3>{`Github handle: ${this.state.gitUsers.login}` }</h3>
            <img src={this.state.gitUsers.avatar_url} width={400} />
          </div>

          // :

          // this.state.gitUsers.map((item, key) => {
          //   return (
          //     <div key={key} className='innerCard'>
          //   <h3>{`Github handle: ${item.login}` }</h3>
          //   <img src={item.avatar_url} width={200} />
          //   </div>
          //   )
          // })
        }
        </div>
      </div>
    )
  }
}

export default App;
