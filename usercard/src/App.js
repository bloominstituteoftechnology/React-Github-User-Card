import React from 'react';

class App extends React.Component {

  state = {

    userCard: [{
      "login": "FinalBoss",
      "id": 28095494,
      "node_id": "MDQ6VXNlcjI4MDk1NDk0",
      "avatar_url": "https://avatars2.githubusercontent.com/u/28095494?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/FinalBoss",
      "html_url": "https://github.com/FinalBoss",
      "followers_url": "https://api.github.com/users/FinalBoss/followers",
      "following_url": "https://api.github.com/users/FinalBoss/following{/other_user}",
      "gists_url": "https://api.github.com/users/FinalBoss/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/FinalBoss/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/FinalBoss/subscriptions",
      "organizations_url": "https://api.github.com/users/FinalBoss/orgs",
      "repos_url": "https://api.github.com/users/FinalBoss/repos",
      "events_url": "https://api.github.com/users/FinalBoss/events{/privacy}",
      "received_events_url": "https://api.github.com/users/FinalBoss/received_events",
      "type": "User",
      "site_admin": false,
      "name": "Brian Clayton",
      "company": "Project FinalBoss",
      "blog": "https://www.projectfinalboss.org",
      "location": "Pennsylvania",
      "email": null,
      "hireable": true,
      "bio": "I'm an aspiring game developer set out to make a masterpiece rpg.  Even if I only make one hit game, at least I can say my dream came true, lol.",
      "public_repos": 45,
      "public_gists": 1,
      "followers": 16,
      "following": 11,
      "created_at": "2017-04-27T10:25:53Z",
      "updated_at": "2020-05-12T23:59:55Z"
    }],
    followers: ['tetondan',
    'dustinmyers',
    'justsml',
    'luishrd',
    'bigknell'],
    error: ""
    

  };



  componentDidMount(){

    fetch("https://api.github.com/users/finalboss")
    .then(res => console.log(res))
    // // .then(finalB => {
    // //   console.log("bk: App.js: App: CDM: fetch res: finalB.message:", finalB.message);

    //   if(finalB.status === "error") {

    //     this.setState({error: finalB.message});

    //   } else {

    //     this.setState({userCard: finalB.message});

    //   }
    // })
    .catch(err => {

      console.error("bk: App.js: App: CDM: detch failed: ", err);
      this.setState({error: err});
    })
    
  }

  handleFollowerChange = e => {
      this.setState({
        followers: e.target.value
      });

  };

  handleFollowerUpdate = e => {

    fetch(`https://api.github.com/users/${this.state.followers}`)
    .then(res => {
      return res.json();
    })
    .then(following => {
      if(following.status === "error"){
        this.setState({error: following.message});
      } else {
        this.setState({ userCard: following.message})
      }


    })
    .catch(err => {

      this.setState({ error: err});
    });

  }
  
  render() {
  
  return (
    <div className="App">
      <section className="w3-card w3-purple w3-container">
        <article><p>GitHub Card: User</p></article>
  <article className="w3-white w3-cell w3-padding">{this.state.error ? (
     <p>There was an error: {this.state.error}</p>
  ) : (
    this.state.userCard.map( finalB => {
  return <img src={finalB.avatar_url} alt="Brian" />;
  })
  )}
  
  </article>
      </section>
      <section className="w3-card w3-green w3-container">
        <article><p>GitHub Card: Followers</p>
        </article>
        <article className="w3-white w3-cell w3-padding"><p>Avi</p></article>

      </section>
      
    </div>
  );


}

}
export default App;
