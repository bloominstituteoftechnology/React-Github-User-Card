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
    console.log("User Component did mount.")
    axios.get(`https://api.github.com/users/${this.props.user.login}/followers`)
      .then(res => { 
        console.log("res.data from followers: ", res.data) // 200
        this.setState({
          ...this.state,
          userFollowers: res.data // object
        })
        // console.log("userFollowers: ", this.userFollowers)
      })
      .catch(err => console.log(err))
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("User componentDidUpdate is running");
    // console.log("prevState.user: ", prevProps.user);
    // console.log("this.state.user: ", this.props.user);
    if (prevProps.user !== this.props.user) {
      console.log("user has changed!");

      axios.get(`https://api.github.com/users/${this.props.user.login}/followers`)
      .then(res => { 
        console.log("res.data from followers: ", res.data) // 200
        this.setState({
          ...this.state,
          userFollowers: res.data // object
        })
        // console.log("userFollowers: ", this.userFollowers)
      })
      .catch(err => console.log(err))

    }
  }


  render() {

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
