import React from 'react'
import User from './User'
import axios from 'axios'
import './UserCards.css'

class UserCards extends React.Component {

   state = {
      myInfo: {},
   }

   componentDidMount(){
      axios
         .get('https://api.github.com/users/sunkist5691')
         .then(response => {
            console.log(response)
            this.setState({
               ...this.state,
               myInfo: response.data
            })
         })
   }

   render() {

      return (

         <div className='userCards'>
            <div className='myCard'>
               <h3>{this.state.myInfo.name === null ? this.state.myInfo.login : this.state.myInfo.name}</h3>
               <img src={this.state.myInfo.avatar_url} alt={`${this.state.myInfo.name} profile`}/>
               <p>Username: {this.state.myInfo.login}</p>
               <p>{this.state.myInfo.html_url}</p>
               <p>Followers: {this.state.myInfo.followers}</p>
               <p>Following: {this.state.myInfo.following}</p>
               <p>Location: {this.state.myInfo.location !== null ? this.state.myInfo.location : 'N/A' }</p>
            </div>
            {
               this.props.cards.map((eachUser => {
                  return <User key={eachUser.id} eachUser={eachUser}/>
               }))
            }
         </div>

      )
   }
}

export default UserCards