import React from 'react';
import axios from 'axios';
import UserFollowers from './UserFollowers';


class User extends React.Component {
  constructor() {
    super();
    this.state = {
      userFollowers: []
    }
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/Qirhi/followers")
      .then(res => { 
        // console.log("res.data from followers: ", res.data) // 200
        this.setState({
          ...this.state,
          userFollowers: res.data // object
        })
        // console.log("userFollowers: ", this.userFollowers)
      })
      .catch(err => console.log(err))
  }




  render() {
    // const { imageUrl } = this.props;
    // // ^ equivalent to const imageUrl = this.props.imageUrl
    const { user } = this.props;

    return (
      <>
        { user ? `User name: ${user.name}` : "We don't have a user"}
        <br/>
        <UserFollowers userFollowers={this.state.userFollowers}/>
      
      </>
    )
  }
}

export default User;
