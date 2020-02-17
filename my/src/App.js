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
    console.log('CDU');
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
   axios.get(`https://api.github.com/users/${login}`)
    .then(res => {
      console.log('my data:', res.data)
      this.setState({
        login: res.data
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
     <div className='App'>
       <h1>GitHub User Card</h1>
        <User login={this.state.login} img={this.state.img}/>          
         
         </div>
       )
    }
}

export default App;
