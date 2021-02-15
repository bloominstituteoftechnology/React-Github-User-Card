import React from "react";
import axios from "axios";
import User from "./components/user.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  constructor() {
    super();
    console.log("App constructor");
    this.state = {
     user: {
       login: "artofmayhem"
     },
     userInfo: {},
     followers: [],
    };
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.user.login}`)
      .then((res) => {
        console.log("Initial Data Fetch From User Account API Call", res.data);
        // this.setState({...this.state, user: res.data }); DON'T DO THIS
        this.setState((prevState) => ({ ...prevState, userInfo: res.data }));

        // axios
        // .get(res.data.followers_url)
        // .then((res) => {
        //     console.log("Initial Data Fetch From Followers API Call", res.data);
        //     this.setState((prevState) => ({
        //         ...prevState, 
        //         followers: res.data 
        //     }));
        //     console.log('profile followers', this.followers)
        // })
        // .catch((error) => console.log(error)); 
      })
      .catch((error) => console.log(error));
  }

  



  render() {
    return (
      <div className="App d-flex container justify-content-center flex-column ">
        <User user={this.state.userInfo} /> 
       
        <footer>
          <p>
            Find me on Twitter{" "}
            <a href="https://twitter.com/tmillhawaii">
              tmillhawaii
            </a>
          </p>
          <h5>Or</h5>
          <p>
            Find me on Github{" "}
            <a href='http://www.yahoo.com'>Github</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
