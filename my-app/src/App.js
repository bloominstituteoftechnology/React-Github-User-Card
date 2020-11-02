import React from "react"
import Users from "./components/Users"


class App extends React.Component {
  constructor(){
  super()
  this.state = {
    users: []
  }
}



componentDidMount() {
  fetch("https://api.github.com/users/achaselittlefield")
  .then((res) => res.json())
  .then((json) =>{
    if(json.status === "success"){
      this.setState({users: json.message})
    } else {
      console.error("error getting users: ", json)
    }
  })
  .catch((err) => console.error("Unable to show users: ", err))
  console.log("https://api.github.com/users/achaselittlefield")
}


render(){
  return(
    <div>
    <h1>Github User Cards</h1>
    <Users users={this.state.users} />
    </div>
    )
}


}

export default App;
