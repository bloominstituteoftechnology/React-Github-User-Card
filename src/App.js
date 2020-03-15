import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Card from './Card';
import Lambdalogo from './lambda-logo.png';
import Githublogo from './github-logo.png';

class App extends React.Component {

  constructor() {
    super();
    this.state={
      user:[],
      followers:[]
    };
  }

//FETCHING MY USER DATA
componentDidMount() {
  axios
  .get('https://api.github.com/users/aaronmatson1')
  // .get('https://api.github.com/users')
  .then(res => {
    console.log(res.data)
    this.setState({
      user:[
      res.data.name,
      res.data.bio,
      res.data.login,
      res.data.followers,
      res.data.following
    ]
    });
  })
  .catch(err => console.log(err.message));

//FETCHING FOLLOWERS
axios
.get('https://api.github.com/users/aaronmatson1')
.then(res =>{
  console.log(res.data)
  this.setState({
    followers:res.data.forEach(item => {
      axios.get(item.url)
      .then(res => {
        console.log(res.data);
        return res.data
      })
    })
  });
})
  .catch(err => console.log(err.message));
}





      render() {
       return (
         <div className="container">
           <div className="header">
             <img src={Lambdalogo} alt="Lambda Logo"/>
             <p>❤️'s</p>
             <img src={Githublogo} alt="GitHub Logo" />
           </div>
           <div className="cards">
             {this.state.user}
             {this.state.followers}
           </div>
         </div>
       );
     }


  }





export default App;
