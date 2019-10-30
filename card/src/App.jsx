import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import MyProfile from "./components/MyProfile.jsx";
import MyFollowers from "./components/MyFollowers.jsx";

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      myInfo: {},
      myFans: []
    }
  }

  componentDidMount(){
    axios
      .get("https://api.github.com/users/raaudain")
      .then(res => {
        //console.log(res)
        const info = res.data;
        this.setState({
          myInfo: info
        })
        }
      )
      .catch(err => console.log("Error with my info --> ", err))

    axios
      .get("https://api.github.com/users/raaudain/followers")
      .then(res => {
        //console.log("Fans", res.data)
        const fans = res.data.map(fan => {
          //console.log(fan)
          return fan.login;
        })
        //console.log(fans)
      

      fans.forEach(fan => {
        axios
          .get(`https://api.github.com/users/${fan}`)
          .then(res => {
            //console.log(res.data)
            const myFan = res.data;
            this.setState({
              myFans: [...this.state.myFans, myFan]
            })
            //console.log(this.state.myFans)
          })
      })
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div className="pictures">
    
            <MyProfile myInfo={this.state.myInfo} />
            <MyFollowers myFans={Object.values(this.state.myFans)} />
  
          </div>
        </header>
      </div>
    );
  }
  
}

export default App;
