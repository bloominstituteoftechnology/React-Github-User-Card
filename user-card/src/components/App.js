import React from 'react';
import '../css/App.css';
import Header from "./Header";
import Body from "./body";
import Footer from "./Footer";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      userName: "Paul",
      bio: "Hello",
      avitarUrl: "https://avatars2.githubusercontent.com/u/53325792?v=4",
      followers: ""

  };
  }

  setUser = (user) => {
    //e.preventDefault();
    const newUser = {
      userName: user.userName,
      bio: user.bio,
      avitarUrl: user.avitarUrl,
      followers: user.followers
    };
    this.setState(newUser);

  }

  render() {
    return (
      <div className="App">
        <Header setUser={this.setUser}/>
        <Body user={this.state}/>
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
