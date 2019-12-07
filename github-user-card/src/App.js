import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import UserCard from './components/usercard.js';
import NavBar from './components/navbar.js'

let loaded = 0;



class App extends React.Component {


  constructor() {
    super();
    this.state = {
      users:[],
      followers: []
    };

  }

  componentDidMount(){
    console.log("something")
    axios
    .get('https://api.github.com/users/littleonetwo')
      .then((res) => {
          this.setState({users:res.data})
          console.log('response: ', res);
          console.log('users: ', this.state);
          // loaded = 1; //troubleshooting why it wont load fast enough

          axios
          .get('https://api.github.com/users/littleonetwo/followers')
            .then((res2) => {
              this.setState({followers:res2.data});
              console.log('response2: ', res2);
              console.log('followers: ', this.state);
            })
            .catch(err2 => console.log(err2, ': Error with Followers'));
      })
      .catch(err => console.log(err,': Error with User'));

  }




  render() {
    console.log(loaded);
    // console.log(error);
    // console.log("error: ", this.state.error)
    // if (loaded === 1){
      return (
        <div className="App">
          <div className="header">
          <NavBar />
          </div>
          <br />

          <UserCard
            users = {this.state.users}
            followers = {this.state.followers}
          />



        </div>
      );
    // } else {
    //   return (
    //     <div className="App">
    //       <div className="header">
    //         <NavBar />
    //       </div>
    //       <br />
    //       <div> Your content is still loading </div>
    //
    //     </div>
    //   );
    // }
  }
}

export default App;
