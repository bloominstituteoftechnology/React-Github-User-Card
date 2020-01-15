import React from 'react';
import axios from 'axios';
class Followers extends React.Component{
    state = {
      followers: [],
    };
    componentDidMount(){
    axios
    .get(`https://api.github.com/users/maggieprice/followers`)
    .then(res => {
      this.setState({
        followers: res.data
      });
      console.log(res);
    })

    .catch(err => console.log(err));
  }
render () {
return (

<div className='follower-card'> {this.state.followers.map(follower => (
<div className='followercard' key={follower.id}> 
<h2>Github Username: {follower.login}</h2>
<img src={follower.avatar_url} alt="avatar"/>
</div>))}
</div>

);

        } }

export default Followers;