import React from "react"
import Users from "./components/Users"
import axios from 'axios'


class App extends React.Component {
  constructor(){
  super()
  this.state = {
    Users: {},
    Followers: []
  }
}

componentDidMount() {
axios.get("https://api.github.com/users/cameronyoung94")
.then((res) => {
  this.setState({
    Users: res.data

  })
})
axios.get("https://api.github.com/users/cameronyoung94/followers")
.then((res) => {
  this.setState({
    Followers: res.data
  })
})
  .catch((err) => console.error("Unable to show users: ", err))
  console.log("https://api.github.com/users/cameronyoung94")
  console.log("https://api.github.com/users/cameronyoung94/followers")
}


render(){
  return(
    <div>
    <h1>Github User Cards</h1>
    <Users user={this.state.Users} follower={this.state.Followers} />
    </div>
    )
}}

export default App;
