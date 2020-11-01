import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
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
        newusr: null
    };
  }

  componentDidMount() {
    console.log("appjs inside componentdidmount");
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
    if (prevState !== this.state.newusr) {
    //  prevState.setState({newusr:this.state.newusr});
    prevProps = this.state.newusr;
console.log(`Appjs cdu: here ${this.state.newusr}` );
    }

  }

  handleSetNewUser = (newu) => { 

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

  render() {
    return (
     
      <div className="container">
        <h1>Checkout Someone's Github</h1>
         <Gitform newusr={this.state.newusr} handleSetNewUser={this.handleSetNewUser} />
          
         {this.state.username && <Gitcard username={this.state.username} userimg={this.state.userimg}/>}
          
      </div>
    );
  }
}

export default App;