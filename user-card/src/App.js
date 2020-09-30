import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {

  constructor() {

    super();

    this.state = {
      users: [],
      followers: [],
      login: ""
    };
  }

  componentDidMount() {

    axios

      .get("https://api.github.com/users/alexandrakay")

      .then((res) => {
        console.log("res", res);
        this.setState({ users: res.data });
      })

      .catch((err) => console.log(err))

      .then(
        axios
          .get(`https://api.github.com/users/alexandrakay/followers`)

          .then((res) => {
            this.setState({ followers: res.data });
            console.log("follower response", res);
          })

          .catch((err) => console.log(err))
      );
  }




  componentDidUpdate(prevState) {

    if (prevState.users !== this.state.users) {

      console.log("The users changed.");
    }
    if (prevState.login !== this.state.login) {
      console.log("State Updated, user Followers", this.state.login)
    }

    if (prevState.followers !== this.state.followers) {

      console.log("The state changed", this.state.userType);
    }
  }





  fetchUsers = () => {
    axios
    .get(`https://api.github.com/users/${this.state.login}`)
    .then((res) => {
      this.setState({ users: res.data })
      console.log( this.state )
    })
    .catch((err) => console.log(err))
    axios.get(`https://api.github.com/users/${this.state.login}/followers`)
    .then(value => {
        console.log('fetching followers works')
        this.setState({
            followers: value.data
        })
        console.log('follower data ', value.data)
    })
    .catch(err => {
        console.log('err', err)
    })
  }



  handleChange = (e) => {

    this.setState({

      ...this.state,
      login: e.target.value,
    });
  };








  render() {


    console.log("Followers", this.state.followers);



    return (


      <div className="App">


        <h1>super rad github users</h1>


        <input
          type="text"
          value={this.state.userType}
          onChange={this.handleChange}
        />



        <button onClick={this.fetchUsers}> fetch that cool kid </button>


        <div className="user">

          <div id="self">



          <img width="250" 
            src={this.state.users.avatar_url} alt="My usercard"/>


          <h2>{this.state.users.login}</h2>

          </div>

          <div id="followers">


          {this.state.followers.map((followers) => {

            return (

              <div>



                <img width="240" src={followers.avatar_url} alt="followers user card"/>


                <h2>{followers.login}</h2>

              </div>

            );
          })}
          </div>


        </div>

      </div>
    );
  }
}

export default App;