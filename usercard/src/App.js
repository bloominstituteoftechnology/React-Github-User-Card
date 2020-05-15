import React from 'react';
import axios from 'axios';

class App extends React.Component {

  state = {

    userCard: [],
    followers: ['tetondan',
    'dustinmyers',
    'justsml',
    'luishrd',
    'bigknell'],
    error: ""
    

  };



 componentDidMount(){

  axios("https://api.github.com/users/finalboss")
   .then(res => {
    console.log(res.data)
    this.setState({...this.state, userCard: res.data});

   })
   .catch(err => console.log("The data is insufficient", err))

  }

  handleFollowerChange = e => {
      this.setState([{
        ...this.state, followers: e.target.value
      }]);

  };

  handleFollowerUpdate = e => {


    axios(`https://api.github.com/users/${this.state.followers}`)
    .then(res => {
      this.setState({...this.state, userCard: res.data})
    })
  }
  
  render() {
  return (
    <div className="App">
      <section className="w3-card w3-purple w3-container">
        <article><p>GitHub Card: User</p></article>
  
     <article className="w3-white w3-cell w3-padding">
  <div className="w3-container w3-left"> <img src={this.state.userCard.avatar_url} alt="Brian" /></div>  
  <div className="w3-container w3-right">
    <p>Name: {this.state.userCard.name}</p>
    <p>Username: {this.state.userCard.login}</p>
    <p>Company: {this.state.userCard.company}</p>
    <p>Website: {this.state.userCard.blog}</p>
    <p>Location: {this.state.userCard.location}</p></div>
    <div className="w3-container"><p>{this.state.userCard.bio}</p> </div>
    
    </article>
  
      </section>
      <section className="w3-card w3-green w3-container">
        <article><p>GitHub Card: Followers</p>
        </article>
      {this.state.followers.map( follower => {  return <article className="w3-white w3-cell w3-padding">
        <div className="w3-container w3-left">{}</div>
  
        </article>
  })}
      </section>
      
    </div>
  );


}

}
export default App;
