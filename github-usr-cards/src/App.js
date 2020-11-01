import React from "react";
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import { fetchAppD, fetchNewu } from './services/Fetchthem'
import Gitcard from "./Components/Gitcard";
import Gitform from "./Components/Gitform";
/*
  The github react cards assignment
*/

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
        
        id: 0,
        usersname: null,
        username: null,
        userimg: null,  
        newusr: null,
        submitting:null
    };
  }

  componentDidMount() {
    console.log("appjs inside componentdidmount "+this.state.submitting);
    
    // The default fetch for the example beginning search
  //   fetchAppD()
  //     .then((json) => {
  //       if (json.status === "success") {
          
  //         this.setState({ usersname: json.name,username: json.login
  //           ,userimg: json.avatar_url });
          
  //       } else {
  //         console.error("App.js CompDidMount: jsonstatus false  error fetching githubbers though its forced into a set state anyway: ", json);
  //         this.setState({ usersname: json.name,username: json.login
  //           ,userimg: json.avatar_url });
  //       }
  //     })
  //     .catch((err) => console.error("App.js CompDidMount: Major error from catch function ", err));
  // // Fetch followers here as well https://api.github.com/users/< Your github name >/followers
  
      if(this.state.newusr !== null){
        console.log('appjs componentdidmount statenewusr was not null')
        fetchNewu(this.state.newusr )
        .then((json) => {
          if (json.status === "success") {
            this.setState({ usersname: json.name,username: json.login
            ,userimg: json.avatar_url });
             
          } else {
            console.error("App.js No success error fetching githubbers: handleSetNewUser forcing it any way", json);
            this.setState({ usersname: json.name,username: json.login
              ,userimg: json.avatar_url });
          }
        })
        .catch((err) => console.error("App.js HandleSetNewUser You've got errors: ", err));
      
        
      
      }
      
      

    }
  /*Some names
   bigknell','tetondan',
'dustinmyers', 'justsml', 'luishrd', 'snowcoding','james-coulter
        */
  handleUserChange = (e) => {
    console.log("appjs within handleuserchange");
    this.setState({
      newusr: e.target.value
    });
  };

  componentDidUpdate(prevProps, prevState) {

    console.log("appjs inside componentdidupdate");
    if (prevProps.newusr === this.state.newusr && this.state.newusr !== null) {
      this.setState({newusr:null});
    //  if(this.state.submitting === null){
    //    this.setState({submitting:true})
    //  }
    //  prevState.setState({newusr:this.state.newusr});
    // prevState.newusr = this.state.newusr;
console.log(`Appjs cdu: this.state ${this.state.newusr} prevProps ${prevProps.newusr} prevState ${prevState.newusr}` );
    }

  }

  handleSetNewUser = (newu) => { 
console.log('Appjs through the handleSetNewUser to set newusr then fetch newu')
    this.setState({
      newusr: newu
    })
    fetchNewu(newu)
      .then((json) => {
        if (json.status === "success") {
          this.setState({ usersname: json.name,username: json.login
          ,userimg: json.avatar_url });
           
        } else {
          console.error("App.js No success error fetching githubbers: handleSetNewUser forcing it any way", json);
          this.setState({ usersname: json.name,username: json.login
            ,userimg: json.avatar_url });
        }
      })
      .catch((err) => console.error("App.js HandleSetNewUser You've got errors: ", err));
  };
  submits = (tr) =>{
    this.setState({submitting:tr});
  }

  render() {
    return (
     
      <div className="container">
        <h1>Checkout Someone's Github</h1>
         <Router path="/">
         <Gitform submits={this.submits}  submitting={this.state.submitting}  newusr={this.state.newusr} handleSetNewUser={this.handleSetNewUser} />
          
          {this.state.newusr !== null ? <Gitcard username={this.state.username} userimg={this.state.userimg} /> : null  }
           
         </Router>
      </div>
    );
  }
}

export default App;