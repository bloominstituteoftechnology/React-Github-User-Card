import React from "react"
import AaronCard from "./AaronCard"
import "./App.css"

class App extends React.Component {
  state = {
    userCard: [],
  }
  componentDidMount() {
    fetch("https://api.github.com/users/flowersa29")
      .then((res) => res.json())
      .then((json) => {
        console.log("results App", json)
        console.log("results App", json.login)
        if (json.login === "success") {
          this.setState({ userCard: json.login })
        } else {
          console.error("error fetch", json)
        }
      })
      .catch((err) => console.error("unable to retrieve data"))
  }

  render() {
    return (
      <div className="App">
        <h1>Github user project</h1>

        <AaronCard />
        {this.state.userCard.map((card)=>{
          return <h1>{card}</h1>
          
        })}
      </div>
    )
  }
}

export default App
