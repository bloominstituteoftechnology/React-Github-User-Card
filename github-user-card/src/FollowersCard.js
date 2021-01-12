import React from 'react'
import axios from 'axios'

class FollowersCard extends React.Component{
    state={
        followers:[]
    }

    componentDidMount(){
        axios.get(`https://api.github.com/users/${this.props.props.login}/followers`)
            .then((res)=>{
                this.setState({
                    followers:res.data
                })
                // console.log(this.state.followers)
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps!==this.props.props){
        axios.get(`https://api.github.com/users/${this.props.props.login}/followers`)
            .then((res)=>{
                this.setState({
                    followers:res.data
                })
                // console.log(this.state.followers)
            })
            .catch((err)=>{
                console.log(err)
            })}
    }
    
    render(){
        // console.log(this.props.props)
        return(
            <div>
                <h3>Followers:</h3>
                    <ul>{this.state.followers.map((follower)=>{
                        return <li>{follower.login}</li>
                    })}</ul>
            </div>
        )
    }
}
export default FollowersCard 
                        