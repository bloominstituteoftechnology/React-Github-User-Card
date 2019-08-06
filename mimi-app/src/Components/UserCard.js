import React from 'react';
import axios from 'axios';
export default class UserCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            mimiData: []
        }
    
    axios.get("https://api.github.com/users/meowmimi1/followers")
  .then(response => {
    this.setState({
      mimiData: response.data
    })
  })
  .catch(err =>{
    console.log(err)
  })
}
    render(){
        console.log(this.props.mimiData)
        return(
           <div>
            <div>{this.props.mimiData.login}</div>
            <div>{this.props.mimiData.id}</div>
            <div>{this.props.mimiData.followers}</div>
            <div>{this.props.mimiData.following}</div>
            <div>{this.props.mimiData.public_repos}</div>
            </div>
        )
    }
}