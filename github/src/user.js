import React from 'react';
import axios from 'axios'
import MyProfile from './myprofile';
import Follow from './follow';

class User extends React.Component {
    constructor() {
        super();
        this.state ={}
    }
    componentDidMount(){
        axios.get("https://api.github.com/users/padgettriver/followers")
        .then(re => {
          this.setState(re.data)
          console.log(re)
        })
        .catch(error=> {
          console.log('error', error)
        })
    }
    render() {
        return ( 
            <>
            <div>
                <h1>This is my profile</h1>
                <MyProfile user={this.props.users}/>
            </div>
            <div>
                <h1>These are my followers</h1>
                <Follow all={this.state}/>
            </div>
            </>
        )
    }
}

export default User;