import React from 'react';
import axios from 'axios';
import Followers from './followers'

class User extends React.Component {
    constructor() {
        super();
        this.state = {
            followers: []
        }
    }

    componentDidMount() {
        console.log('user component did mount')
        axios
        .get("https://api.github.com/users/artofmayhem/followers")
        .then((res) => {
            console.log("Initial Data Fetch From Followers API Call", res.data);
            this.setState({
            ...this.state, 
            followers: res.data 
            });
            console.log('profile followers', this.followers)
        })
        .catch((error) => console.log(error));    
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("User Component Updating");
        axios
        .get("https://api.github.com/users/artofmayhem/followers")
        .then((res) => {
          console.log("Initial Data Fetch From Followers API Call", res.data);
          this.setState({
            ...this.state, 
            followers: res.data 
          });
           console.log('profile followers', this.followers)
        })
        .catch((error) => console.log(error));    
    }



render() {
    const {user} = this.props
    console.log('user', user)
return (
    <div>
     <div className="card">
          <img
            src={user.avatar_url}
            alt={user.login}
          ></img>

          <h1 className="name">{user.name}</h1>
          <h3>Location: {user.location}</h3>
          <h4>User Name: {user.login}</h4>
          <h4>About Me: {user.bio}</h4>
          <p></p>
        </div>
    <Followers followers={user.followers} /> 
</div>
)

}
}

export default User;