import React from 'react';
import axios from 'axios';
import Followers from './Followers';
import {  Card, CardImg, CardBody,
  CardTitle } from 'reactstrap';


class User extends React.Component {
    constructor() {
        super();
            this.state = {
              followers: [],
            }
    }   
        componentDidMount() {
            this.fetchFollowers('user');       
       
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
         <Card>
           <CardImg src={this.props.login.avatar_url} alt='user'/>
             <CardTitle>{this.props.login.login}</CardTitle> 
                <CardBody className='followers'>
                    {this.state.followers && this.state.followers.map(follower => (
                      <Followers key={follower.id} img={follower.avatar_url} follower={follower}  />
                     ))} 
                </CardBody>  
             </Card> 
           </div>
        )
     };
 };           
  

export default User;