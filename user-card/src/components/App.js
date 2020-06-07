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
      userName: "",
      bio: "",
      avitarUrl: "",
      followersList: []

    };
  }

  setUser = (user) => {
    //e.preventDefault();
    const newUser = {
      login: user.login,
      userName: user.userName,
      bio: user.bio,
      avitarUrl: user.avitarUrl,
      followersList: []
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
        <Body user={this.state} />
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
