import React from "react"
import axios from "axios"
import Card from "./Card"
import './App.css';
import logo from "./gitCat.png"


class App extends React.Component {
  state = {
    userData: {},
    followers: [],
  }
  
  componentDidMount() {
    axios
      .get("https://api.github.com/users/Tasnimzalom")
      .then(response => {
        this.setState({ userData: response.data })
        axios.get(response.data.followers_url).then(response => {
          this.setState({ followers: response.data })
        })
          .catch(error => console.log(error.message))
      })
      .catch(error => console.log(error.message))
  }
  
  componentDidUpdate() {
    console.log("hello")
  }

  render() {
    const { userData, followers } = this.state
   
    console.log(followers)
    return (
      <div >
        <h1>Github Users</h1>
        <div className="header">
          
      <img className="logo" src={logo} alt="Logo" />
       
        </div>
        <div className="container">

        <Card{...userData} />

        {followers.map((data)=> (
            <Card {...data}/>
        ))}
     
        </div>
      </div>
        )
    } 
}

export default App;
