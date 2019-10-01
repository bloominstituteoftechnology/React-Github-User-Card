import React from 'react';
import axios from 'axios';

export default class Card extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: {}
    }
  } 

componentDidMount(){
  
axios.get(`https://api.github.com/users/${this.props.user}`)
.then(response => {
    this.setState({
      user: response.data
    })
  })
.catch(error => { 
  alert(error);
});

}

  render() {
    const { avatar_url, login, name, location, html_url, followers, following, bio} = this.state.user;
    return (
    <div class="card">
      <img src={avatar_url} />
      <div class="card-info">
        <h3 class="name">{name}</h3>
        <p class="username">{login}</p>
        <p>Location: {location}</p>
        <p>Profile:  
          <a href={html_url}>{html_url}</a>
        </p>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <p>Bio: {bio}</p>
      </div>
  </div>
  )
  }
}


