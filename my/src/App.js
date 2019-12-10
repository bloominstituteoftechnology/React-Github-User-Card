import React from 'react';
import axios from 'axios';
import User from './User';


class App extends React.Component {
  constructor() {
    console.log('const');
    super();
      this.state = {
        login: {}
       };
  }

  componentDidMount() {
     this.fetchUser('hdnye')
  };

//   componentDidUpdate(prevProps, prevState) {
//     if(prevState.followers !== this.state.followers) {
//       this.setState({
//        followers: 0
//      })}  else {  
//      this.fetchFollowers()
//   };
// };

 fetchUser =  (login) => {
   axios.get(`https://api.github/users/${login}`)
    .then(res => {
      console.log('my data:', res.data)
      this.setState({
        login: res.data.name
      })
    })
    .catch(err => {
      console.log('err:', err)
  })
 };

  // handleChange = (event) => {
  //   this.setState({
  //     login: event.target.value
  //   })
  // }


  render() {
    return (
     <div>
       <h1>GitHub User Card</h1>
        <User login={this.state.login} img={this.state.img}/>          
         {/* <select value={this.state.login} onChange={this.handleChange}>
           <option value='users'>User</option>
            <option value='followers'>Followers</option>        
            </select>
              <div>
               {this.state.followersNames && this.state.followersNames.map((follower) => (
                <img key={follower.id} src={follower.login} alt='Follower' />
            ))} */}
         {/* </div> */}
       </div>   
    )
  }
}

export default App;
