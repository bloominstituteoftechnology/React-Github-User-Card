import axios from "axios"
import React,{Component} from 'react'

export default class FollowersCard extends Component {
    constructor(){
        super();
    this.state ={
        user:[],
        login:"",
        avatar_url:""
        
    }
}      
          
componentDidMount(){
   axios.get("https://api.github.com/users/tetondan/followers")
        .then((res)=>{
            console.log(res)
            this.setState({user:res.data})
        })
         .catch((err)=>{

            console.log(err)
         })



        }

    render(){

        return (
         <section className="cards-container">
       { this.state.user.map((user) => (
          <div className="card-container">
            <div className="image-container">
              <img src={user.avatar_url} />
            </div>
              <div className="cards-title">
                <h3>Login:    {user.login}</h3>
              
            </div>
          </div>
        ))};
        </section>
        )
}

}

        
      
        











    
      











    

