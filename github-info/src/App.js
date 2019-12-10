import React from 'react'
import axios from "axios"
import User from "./components/User"
import Followers from "./components/Followers"
class App extends React.Component{
    // to initialize date we need a constructor create in the memory 
    constructor(){
        // super is a special function that allows us to get access to the React.Component lifecycle methods 
        super()
        this.state = {
            username:"",
            followers:[]
        }
    }
    componentDidMount(){
      this.fetchUserData()
      this.fetchFollowersData()
    }
    fetchUserData = () => {
        axios.get(`https://api.github.com/users/YasirHasn9`)
            .then(res => 
                this.setState({
                username:res.data
            })
            )
            .catch(err => console.log(err))
     
    }
    fetchFollowersData = () => {
        axios.get(`https://api.github.com/users/YasirHasn9/followers`)
             .then(res => this.setState({followers:res.data}))
             .catch(err => console.log(err))
    }
    render(){
        console.log(this.state.followers)
        return (
            <div>
                {/* username account  */}
                <User username={this.state.username} />
                {this.state.followers.map(follower => <Followers name={follower.login} image={follower.avatar_url} />)}
            </div>
        )
    }
}

export default App
