import React from 'react';
import axios from 'axios';

class Card extends React.Component {
    state = {
        data: [],
        followersData: []
      }
    
      componentDidMount(){
        axios.get("https://api.github.com/users/atcriteria")
          .then((resp) => {
            console.log(resp)
            this.setState({
              data: resp.data
            });
          })
          .catch((err) => {
            console.log(err)
          });
          axios.get("https://api.github.com/users/atcriteria/followers")
          .then((resp) => {
              console.log(resp)
          })
      }



    render(){
        return(
            <div>
                <img width="50" src={this.state.data.avatar_url} alt="" />
                <h2>Username: {this.state.data.login}</h2>
                <p>Public Repos: {this.state.data.public_repos} </p>
                <p>Following: {this.state.data.following} </p>
                <p>Followers: {this.state.data.followers} </p>
            </div>
        )
    }
}

export default Card;