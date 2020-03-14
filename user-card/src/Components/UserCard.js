

import React from 'react';


class userCard extends React.Component{

    constructor () {
        super();
        // set the initial state to empty 
        this.state = {
            userCard: [],
            userFollowers: [],
            userSearch:"",
            submitFlag:false

        }
    }

    // get the user data from api
    getUserData = () =>{
        fetch('https://api.github.com/users/shiva-banihashem')
        // if successful
        .then(response => {
            return response.json();
        })
        .then(userData => {

            
            this.setState({ userCard: userData});

            
        })


        .catch(error => {

            console.log(error)
        })
    }

    // get the user's followers from api
    getUserFollowers = () =>{
        fetch('https://api.github.com/users/shiva-banihashem/followers')

        .then(response => {
            return response.json();
        })
        .then(followers => {    
            this.setState({ userFollowers: followers});

            
        })


        .catch(error => {
            
            console.log(error)
        })
    }

    //UserSearchName
    handleChange = e => {
        e.preventDefault();
        this.setState({
          userSearch: e.target.value
        });
      };


      handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            submitFlag:true

          });
       
    }

    //Get userSearched
      handleGetUser = ()=> {

        fetch(`https://api.github.com/users/${this.state.userSearch}`)
        // if successful
        .then(response => {
            
            return response.json();
        })
        .then(userData => {
            if(userData.message === "Not Found")
            this.setState({
                
                userCard:[],
                userFollowers:[]
              });
            else{
               this.setState({ userCard: userData});
               
            }

           
        })


        .catch(error => {
            
            console.log(error)
        })


      };

      handleUserFollowers = () => {

        fetch(`https://api.github.com/users/${this.state.userSearch}/followers`)

        .then(response => {
            
            return response.json();
        })
        .then(followers => {
           
            this.setState({ userFollowers: followers});

            
        })


        .catch(error => {
            
            this.setState({ userFollowers:[]});

            console.log(error)
        })
    }

    // when component mounted, 
    // get the user data and user's followers
    componentDidMount(){
        
        this.getUserData();
        this.getUserFollowers();


    }


    componentDidUpdate(prevProps, prevState) {
        
          if (this.state.submitFlag)  {

               this.handleGetUser();
               this.handleUserFollowers();  
               this.setState({
               submitFlag:false

               })


          }


    }


    render (){

        return (
        <>
         <form onSubmit={this.handleSubmit}>
           <label htmlFor="name"><b>Enter User Name:</b></label >
           <input
             type="text"
             id="name"
             value={this.state.userSearch}
             onChange={this.handleChange}
             placeholder="User Name"
         />
         <button>Display User</button>
        </form>

        <div className ="app-user">
            <div className='user-card'>
                <h1> GitHub User Info</h1>
                <h3>username: {this.state.userCard.login} </h3>
                <h3> {this.state.userCard.name}</h3>
            <img  alt='user-avatar' src={this.state.userCard.avatar_url}/> 
            </div>

            <div className='followers'>
               <h2> List of Followers</h2>

               {Array.isArray(this.state.userFollowers) && this.state.userFollowers.map(follower => {
                return <div className='follower' key={follower.login}> 
                <img  alt='user-follower-avatar' src={follower.avatar_url}/> 
                <h3 >{follower.login}</h3>

                      </div>


             })}

           </div>
        </div>
</>


        )
    }

} 

export default userCard;
 