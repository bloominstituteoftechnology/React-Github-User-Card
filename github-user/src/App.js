import React, { Component } from 'react'
import Search from './components/Search'
import User from './components/User'
import Follower from './components/Follower'
import axios from 'axios'
import './App.css'

export default class App extends Component {
  constructor(){
    console.log('constructor render ')
    super()
    this.state={
      url:`https://api.github.com/users/`,
      userSearch:'',
      user:'hobsond',
      userData:[],
      followers:[]


    }
  }
  componentWillMount(){
    console.log('will unmount')

  }

  componentDidMount(){
    console.log('did mount')
    axios.get(this.state.url + this.state.user)
    .then(res=>{
      // console.log(res.data)
      this.setState({userData : res.data })
    })
    .catch(err=>console.log(err))

    axios.get(this.state.url + this.state.user+ '/followers')
      .then(res=>{
        console.log(res.data)
        this.setState({followers:res.data})
      })
    


  }

  componentDidUpdate(prevProps,prevState ){
    // console.log('did update')
    if(this.state.user !== prevState.user){
      console.log('update')
      axios.get(this.state.url + this.state.user)
    .then(res=>{
      // console.log(res.data)
      this.setState({userData : res.data })
    })
    .catch(err=>console.log(err))


      axios.get(this.state.url + this.state.user+ '/followers')
      .then(res=>{
        console.log(res.data)
        this.setState({followers:res.data})
      })
    }

  }

  searchChange = evt=>{
    this.setState({userSearch:evt.target.value})
  }
  searchSubmit = evt=>{
    evt.preventDefault()

    this.setState({user:this.state.userSearch})

    
  }

  render() {
    console.log('render')

    return (
      <div className='App'>
        <Search search={this.searchChange} submit={this.searchSubmit} />

        <div>
          <User userData={this.state.userData} />
        </div>
        <div>
          {this.state.followers.map(item=>{
            return <Follower follower={item}/>
          })}
        </div>
      </div>
    )
  }
}
