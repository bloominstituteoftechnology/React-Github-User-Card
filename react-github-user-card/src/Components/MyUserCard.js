import React from 'react';
import '../../src/App.css';

class MyUserCard extends React.Component {
 state = {
        userProfileData: {}
  };  

  componentDidMount() {
    fetch('https://api.github.com/users/Wade-Coplen')
      .then(res => res.json())
      .then(data => { 
        console.log('fetch: data: ', data);
        this.setState({ ...this.state, userProfileData: data})
  })
      .catch(err => console.log('error on fetch: ', err));
  }  
  render() {
    return (
      <div className="MyUserCard">       
          <h3>{this.state.userProfileData.login}</h3> 
          <img 
              width= '250'
              src= {this.state.userProfileData.avatar_url}
              alt= 'null'
               />  
          <a 
          href= {this.state.userProfileData.html_url}>
              GITHUB
          </a>
          <p>ID:{this.state.userProfileData.id}</p>
          <p>API GET/POST: {this.state.userProfileData.url}</p>        
      </div>                                 
    );    
  }  
}
export default MyUserCard;