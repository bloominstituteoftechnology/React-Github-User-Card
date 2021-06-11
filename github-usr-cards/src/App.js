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
        location: null,
        followers:[]
    };
  }

  componentDidMount() {
    console.log("appjs inside componentdidmount "+this.state.submitting);

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

    this.setState({username:null})


console.log(`Appjs cdu: this.state ${this.state.newusr} prevProps ${prevProps.newusr} prevState ${prevState.newusr}` );
    }

  }

  handleSetNewUser = (newu) => { 
console.log('Appjs through the handleSetNewUser to set newusr then fetch newu')
    


      Promise.all([
        fetch(`https://api.github.com/users/${newu}`)
        .then(value => value.json()),
        fetch(`https://api.github.com/users/${newu}/followers`).
        then(value => value.json())
        ])
        .then((json) => {
           console.log(json)
           if(newu != json[0].login){
            this.setState({newusr:json[0].login})
          }else{
            this.setState({
              newusr: newu
            })
          }

          this.setState({username: json[0].login, 
            usersname: json[0].name, userimg:json[0].avatar_url,
          bio: json[0].bio, created_at: json[0].created_at, 
          location: json[0].location,followers:json[1]
        
        })
            console.log('in followers',this.state.followers);
          //json response
        })
        .catch((err) => {
            console.log(err);
        });
    


    
    };


  render() {
    return (
     
      <div className="container">
        <h1>Checkout Someone's Github</h1>
         <Router path="/">
         <Gitform newusr={this.state.newusr} handleSetNewUser={this.handleSetNewUser} />
          
          {this.state.username !== null ? <Gitcard username={this.state.username} name={this.state.usersname} userimg={this.state.userimg}
                                 bio={this.state.bio} created_at={this.state.created_at} location={this.state.location}
                                 followers={this.state.followers}   /> 
                                               : 
                                               null  }
           
         </Router>
      </div>
    );
  }
}

export default App;