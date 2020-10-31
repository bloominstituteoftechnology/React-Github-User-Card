import React from "react";
// import { BrowserRouter as Router } from 'react-router-dom';
// import { fetchAppD } from './services/Fetchthem'
// import Gitcard from "./Components/Gitcard"

/*
  The github react cards assignment
*/
class Gitform extends React.Component {
  constructor(){
    super();
    this.state = { 
        newusr: "extrude575757"
    };
  }

  componentDidMount() {
    console.log("Gitform.js cdm")
    }
  /*Some names
   bigknell','tetondan',
'dustinmyers', 'justsml', 'luishrd', 'snowcoding','james-coulter
        */
  handleUserChange = (e) => {
    this.setState({
      newusr: e.target.value
    });
  };

  componentDidUpdate(prevProps, prevState) {
//     if (prevProps.newusr !== this.state.newusr) {
//      this.props.newusr = this.state.newusr;
// console.log(`Gitform cdu: here prevProps${this.state.newusr}` );
//     }

  }

  handleSetNewUser = (e) => { 
    // fetch(`https://api.github.com/users/${this.state.newusr}`)
    //   .then((res) => res.json())
    //   .then((json) => {
    //     if (json.status === "success") {
    //       this.setState({ userimg: json.avatar_url });
    //       this.setState({ username: json.login });
    //       this.setState({ usersname: json.name });
    //     } else {
    //       console.error("error fetching githubbers: handleSetNewUser forcing it any way", json);
    //       this.setState({ userimg: json.avatar_url });
    //       this.setState({ username: json.login });
    //       this.setState({ usersname: json.name });
    //     }
    //   })
    //   .catch((err) => console.error("App.js HandleSetNewUser You've got errors: ", err));
        e.preventDefault();
        
        this.props.handleSetNewUser(this.state.newusr);
    };

  render() {
    return (
     
       
          <div className="card"> 
            <form onSubmit={this.handleSetNewUser}>
                <input type="text" value={this.state.newusr} onChange={this.handleUserChange} />
            <input type="submit" />    
            </form>     
             
        </div>
           
    );
  }
}

export default Gitform;