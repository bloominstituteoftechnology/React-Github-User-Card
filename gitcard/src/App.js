import React from "react";
import axios from "axios";
import UserInfo from "./components/userInfo"
import Followers from "./components/followers"

class App extends React.Component {
  state = {
    userInfo: [],
    followers: [],
  }

  componentDidMount () {
     axios.get('https://api.github.com/users/uchxchi')
        .then(res => {
            // console.log(res)
            this.setState({
                userInfo: res.data,
               
            })
            
        })
        .catch(err => {
            console.log(err)
        })

     axios.get('https://api.github.com/users/uchxchi/followers')
        .then(res => {
           
            this.setState({
                followers: res.data,
               
            })
            
        })
        .catch(err => {
            console.log(err)
        })


        
    
  }
  render() {
    return(
      <div>
        {/* { console.log(this.state.card)} */}
        <h1>GIT CARD</h1>
        <UserInfo userInfo={this.state.userInfo} />
        {
          this.state.followers.map(info => (
             <Followers followers={info} />
          ))
        }
       
       
      </div>
    )
  }

}

export default App;
