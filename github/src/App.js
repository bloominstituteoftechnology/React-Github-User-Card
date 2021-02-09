import React from "react"
import axios from 'axios'
import MainCard from "./card"
import FollowersCard from "./FollowersCard";

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
            //  console.log(res.data)
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
    <>
      <MainCard
        user={this.state.user}/>
        
       
        <FollowersCard/>
  
         
      
      </>     
       

         
     
   
    
    
  );
}
}
export default App;
