import React from "react"
import axios from 'axios'
import MainCard from "./card"


class App extends React.Component {
  state = {
    user:  "",
     avatar:"",
     bio:"",
     blog:"",
     name:"",
     location:"",
     html_url:""
}

  componentDidMount() {
    axios.get("https://api.github.com/users/tetondan")
        .then((res)=>{
             console.log(res.data)
             this.setState({
               user: res.data
            
         })
      
          })

        .catch(err=>{
            console.log(err);
        });
}


 render(){
  return (
    
      <MainCard
       avatar_url={this.state.user.avatar_url}
       bio={this.state.user.bio}
       login={this.state.user.login}
       blog={this.state.user.blog}
       name={this.state.user.name}
       location={this.state.location}
       html_url={this.state.html_url}
       />
  
         
      
           
       

         
     
   
    
    
  );
}
}
export default App;
