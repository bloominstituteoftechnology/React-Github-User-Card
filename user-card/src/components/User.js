import React from 'react';
import axios from 'axios'
import UserCard from './UserCard'


class User extends React.Component{
    constructor(){

        super();
        this.state = {
            user: {},
            followers:[]
            
        }
    };

    componentDidMount(){
        axios
        .get('https://api.github.com/users/Aasachristian')
        .then(res => {
            //  console.log(res.data.followers_url)
            this.setState({
                user: res.data

            })

        })
        .catch(err => console.log(err));

        axios
        .get('https://api.github.com/users/Aasachristian/followers')
        .then(res => {

            console.log(res.data)
            this.setState({
             followers: res.data
            })
        })
        .catch(err => console.log(err))
    }
    
    render() {

        
        return(
            <div className= "container">
          <div className= 'UserClass'>
              {<UserCard 
              login= {this.state.user.login}  
              id= {this.state.user.id} 
              avatar_url= {this.state.user.avatar_url}
              html_url={this.state.user.html_url}
              />} 
              </div>      
        
        
        <div className= 'followersClass'>
        {this.state.followers.map(follower => (
            <UserCard 
            login= {follower.login}  
            id= {follower.id} 
            avatar_url= {follower.avatar_url} 
            location= {follower.location}
            html_url={follower.html_url}
            /> 
            
        ))}
        </div>
        
        
        
        
        </div>
           
        )
    }
}
export default User;