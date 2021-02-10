import axios from 'axios'
import React, { Component } from 'react'

export default class Followers extends Component {
state ={
    followers:[]
}
componentDidMount(){
    axios
    .get('https://api.github.com/users/coriestewart1989/followers')
    .then((res)=>{
        this.setState({
            followers:res.data,
        })
    })
}

    render() {
        return (
            <div style = {{display: 'flex', flexFlow: 'row wrap'}}>
                {this.state.followers.map(follower=>(
                    <div key ={follower.id}
                    // style = {{

                    // }}
                    >
                        <img src={follower.avatar_url} alt = {follower.login}/>
                    </div>
                ))}
                {/* <h4>{this.state.followers.login}</h4> */}
            </div>
        )
    }
}
