import React from 'react'
import axios from 'axios'
import Followers from './Followers'

const followerUrl = 'https://api.github.com/users/tim-mock/followers'

class Card extends React.Component  {
constructor (props) {
    super(props)
    this.state = {
        followerData: []
    }
}

componentDidMount() {
    axios 
     .get(followerUrl)
     .then( res => {
       
       this.setState({
         followerData: res.data
       })
     })
     .catch(err => console.log(err))
   }

render() {
    return (
        
        <div>
            <p>hey {console.log('this is follower data ', this.state.followerData)}</p>
            <h1> My name is {this.props.data.login}</h1>
            <img src={this.props.data.avatar_url} />
            <Followers followers={this.state.followerData} />
        </div>
    )
}
}

export default Card; 