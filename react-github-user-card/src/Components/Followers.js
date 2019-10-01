// import React from 'react';
// import axios from 'axios'
// import ProfileCards from './ProfileCards'
// import User from './User'

// class Followers extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       followerInfo: []
//     }
//   }

//   componentDidMount(){
//     console.log(this.followerArray)
//     this.state.followerArray.forEach(item => {
//       axios
//       .get(`https://api.github.com/users/${item}`)
//       .then(response => {
//         console.log('RESPONSE', response)
//         this.setState({
//           followerInfo: response.data
//         })
//       })
//     })
//   }
  
//   render(){
//     return(
//       <div>
//         Followers
//         {/* <ProfileCards
//         followerInfo={this.state.followerInfo}
//         /> */}
//       </div>
        
//     )
//   }
// }

// export default Followers;