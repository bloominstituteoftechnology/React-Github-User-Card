import React from 'react';
import '../css/App.css';
import Header from "./Header";
import Body from "./body";
import Footer from "./Footer";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      login: "",
      name: "",
      location: "",
      bio: "",
      blog: "",
      avitarUrl: "",
      company: "",
      publicRepos: "",
      publicGists: "",
      followers: "",
      following: "",
      followersList: []

    };

    
  }

  

  setUser = (user) => {
    //e.preventDefault();
    const newUser = {
      login: user.login,
      name: user.name,
      location: user.location,
      bio: user.bio,
      blog: user.blog,
      avitarUrl: user.avitarUrl,
      company: user.company,
      publicRepos: user.publicRepos,
      publicGists: user.publicGists,
      followers: user.followers,
      following: user.following,
      followersList: [],
      
    };
    //console.log(user);

    this.getFolowersList(newUser);

  }

  getFolowersList = (user) => {
    axios
      .get(`https://api.github.com/users/${user.login}/followers`)
      .then(res => {
        //user.followersList = [...res.data];
        res.data.map((follower, i)=>{
          user.followersList.push(follower);
        })

        this.setState(user);

      })
      .catch(err => console.log(err));

      
  }

  render() {
    return (
      <div className="App">
        <Header setUser={this.setUser} />
        {this.state.login ? <Body user={this.state} setUser={this.setUser}/> :
         <div className="welcome-container">
           <p>Welcome to your Github search engine.</p>
           <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.molecularecologist.com%2Fwp-content%2Fuploads%2F2013%2F11%2Fgithub-logo.jpg&f=1&nofb=1" alt="GitHub logo"/>
           <p className="no-user" >Find and follow your TL's, SL's, and fellow Lambda students. </p>
         </div>
         
        }
        
        <Footer />

      </div>
    );
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }



}



export default App;
