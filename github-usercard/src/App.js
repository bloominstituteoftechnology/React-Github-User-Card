import React from "react"
import axios from 'axios'


class App extends React.Component {
  state = {
    user:  []
    



  }

  componentDidMount() {
    axios.get("https://api.github.com/users/tetondan")
        .then((res)=>{
            console.log(res)
            // this.setState({
            //   user: res.data
            
        // })
      
          })

        .catch(err=>{
            console.log(err);
        });
}


 render(){
  return (
    <div className="App">
      <h1>GITHUB USERS</h1>
      
     <div className="usercard-container">
         
      
           
             <>
            {/* <h2>UserName:{`${this.state.user.login}`}</h2>
            <a>Followers:{`${this.state.user.followers_url}`}</a>
            <a>Following:{`${this.state.user.following_url}`}</a>
            <img src={ `${this.state.user.avatar_url}`}/>
            <p>User Github:{`${this.state.user.url}`}</p>
          */}

            </>

            //  ))
         }
     
   </div>
    
    </div>
  );
}
}
export default App;
