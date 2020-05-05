import React, { Component } from 'react'
import Search from './components/Search'
import User from './components/User'
import axios from 'axios'

export default class App extends Component {
  constructor(){
    console.log('constructor render ')
    super()
    this.state={
      url:`https://api.github.com/users/`,
      userSearch:'',
      user:'',
      userData:[]


    }
  }
  componentWillMount(){
    console.log('will unmount')

  }

  componentDidMount(){
    console.log('did mount')
    


  }

  componentDidUpdate(prevProps,prevState ){
    // console.log('did update')
    if(this.state.user !== prevState.user){
      console.log('update')
    }

  }

  searchChange = evt=>{
    this.setState({userSearch:evt.target.value})
  }
  searchSubmit = evt=>{
    evt.preventDefault()

    this.setState({user:this.state.userSearch})

    axios.get(this.state.url + this.state.user)
    .then(res=>{
      console.log(res.data)
      this.setState({userData : res.data })
    })
    .catch(err=>console.log(err))
  }

  render() {
    console.log('render')

    return (
      <div>
        <Search search={this.searchChange} submit={this.searchSubmit} />

        <div>
          <User userData={this.state.userData} />
        </div>
      </div>
    )
  }
}
