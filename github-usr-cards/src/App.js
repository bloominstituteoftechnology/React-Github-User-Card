import React from "react";
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import { fetchFollowers, fetchNewu } from './services/Fetchthem'
import Gitcard from "./Components/Gitcard";
import Gitform from "./Components/Gitform";
/*
  The github react cards assignment
*/

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
        
        id: 0,
        usersname: null,
        username: null,
        userimg: null,
        bio: null,
        created_at: null,  
        newusr: null,
        location: null
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
  
      // if(this.state.newusr !== null){
      //   console.log('appjs componentdidmount statenewusr was not null')
      //   fetchNewu(this.state.newusr )
      //   .then((json) => {
      //     if (json.status === "success") {
      //       this.setState({ usersname: json.name,username: json.login
      //       ,userimg: json.avatar_url });
             
      //     } else {
      //       console.error("App.js No success error fetching githubbers: handleSetNewUser forcing it any way", json);
      //       this.setState({ usersname: json.name,username: json.login
      //         ,userimg: json.avatar_url });
      //     }
      //   })
      //   .catch((err) => console.error("App.js HandleSetNewUser You've got errors: ", err));
      
        
      
      // }
      
      

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

    console.log("appjs inside componentdidupdate"+prevState.username);
    if ( this.state.newusr !== this.state.username && this.state.username !== null) {
    // Setting username to null here will trigger the rerender we need to show the currently searched name
    // this.setState({newusr:this.state.username});  
    this.setState({username:null})
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
    
    fetchNewu(newu)
      .then((json) => {
        // This is so the search does not have to be case sensitive for the user
        if(newu != json.login){
          this.setState({newusr:json.login})
        }else{
          this.setState({
            newusr: newu
          })
        }
        // if (json.status === "success") {
        //   this.setState({ usersname: json.name,username: json.login
        //   ,userimg: json.avatar_url });
           
        // } else {
        //   console.error("App.js No success error fetching githubbers: handleSetNewUser forcing it any way", json);
        //   this.setState({ usersname: json.name,username: json.login
        //     ,userimg: json.avatar_url });
        // }
        this.setState({username: json.login, 
          usersname: json.name, userimg:json.avatar_url,
        bio: json.bio, created_at: json.created_at, location: json.location })

        console.log(json);
         
      
      })
      .catch((err) => console.error("App.js HandleSetNewUser You've got errors: ", err));
     
    
    
    };


  render() {
    return (
     
      <div className="container">
        <h1>Checkout Someone's Github</h1>
         <Router path="/">
         <Gitform newusr={this.state.newusr} handleSetNewUser={this.handleSetNewUser} />
          
          {this.state.username !== null ? <Gitcard username={this.state.username} name={this.state.usersname} userimg={this.state.userimg}
                                 bio={this.state.bio} created_at={this.state.created_at} location={this.state.location}   /> 
                                               : 
                                               null  }
           
         </Router>
      </div>
    );
  }
}

export default App;