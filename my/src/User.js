import React from 'react';
import axios from 'axios';
import Followers from './Followers';


class User extends React.Component {
    constructor() {
        super();
            this.state = {
              followers: []
        }
    }   
        componentDidMount() {
            this.fetchFollowers();       
       
    };

        fetchFollowers = () => {
            
            axios.get(`https://api.github.com/users/hdnye/followers`)
            .then(res => {
                console.log(res);
                 this.setState({                     
                    followers: res.data })
            })
        
            .catch(err => {
            console.log('error:', err)
    })
  }

  render() {
    return(
        <div>
          <img src={this.props.login.avatar_url} alt='user'/>
           <h2>{this.props.login.login}</h2> 
              
                <div className='followers'>
                  {this.state.followers && this.state.followers.map(follower => (
                    <Followers key={follower.id} img={follower.avatar_url} follower={follower}  />
                    ))} 
               </div>  
           </div>
        )
     };
 };           
                
    





export default User;