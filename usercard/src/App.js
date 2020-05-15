import React from 'react';
import axios from 'axios';

class App extends React.Component {

  state = {

    userCard: [],
    followArr: [],
    error: ""


  };



 componentDidMount(){

  axios("https://api.github.com/users/finalboss")
   .then(res => {
    console.log(res.data)
    this.setState({...this.state, userCard: res.data});

   })
   .catch(err => console.log("The data is insufficient", err))

   axios("https://api.github.com/users/finalboss/followers")
    .then(resf => {
      console.log(resf.data)
     this.setState({...this.state, followArr: resf.data})

    })
    .catch(err2 => console.log("The data is insufficient", err2))

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
      {this.state.followArr.map( follower => {  return <article className="w3-white w3-cell w3-col w3-padding">
      <div className="w3-container w3-left"> <img src={follower.avatar_url} alt="followers" /></div>  
  <div className="w3-container w3-right">
    <p>Name: {follower.name}</p>
    <p>Username: {follower.login}</p>
    <p>Company: {follower.company}</p>
    <p>Website: {follower.blog}</p>
    <p>Location: {follower.location}</p></div>
    <div className="w3-container"><p>{follower.bio}</p> </div>
            </article>
  })}
      </section>
      
    </div>
  );


}

}
export default App;
