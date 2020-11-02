import React from "react";
// import { BrowserRouter as Router } from 'react-router-dom';
// import { fetchAppD } from './services/Fetchthem'
// import Gitcard from "./Components/Gitcard"

/*
  The github react cards assignment
*/
class Gitform extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
        newusr: this.props.newusr
    };
  }

  componentDidMount() {
    console.log("Gitform.js cdm")
    // this.props.newusr.setState({newusr});
    this.props.submits(true);
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
    if (prevState.newusr === this.state.newusr) {
      console.log('gitform cdu prevstate'+prevState.newusr+' props '+prevProps.newusr)
      // if(this.props.newusr !== null){
      //   this.prevProps = this.state.newusr;
      //   this.prevState = this.state.newusr;
      // }
      if(prevProps.submitting !== true){
        this.props.submits(true);
      }
    //  this.props.state.setState({ newusr: this.state.newusr});
console.log(`Gitform cdu: here this.state.newusr${this.state.newusr}` );
    }

  }
  handleSubmit = () =>{
    
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
        // this.props.setState({newusr:this.state.newusr});
        this.props.handleSetNewUser(this.state.newusr);
    };

  render() {
    return (
     
       
          <div className="card"> 
            <form onChange={this.handleSubmit} onSubmit={this.handleSetNewUser}>
                <input type="text" onChange={this.handleUserChange}  value={this.state.newusr === null ? '' : this.state.newusr}  />
            <input type="submit" />    
            </form>     
             
        </div>
           
    );
  }
}

export default Gitform;