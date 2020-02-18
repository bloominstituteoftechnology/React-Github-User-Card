import React from 'react';
import axios from 'axios';
import User from './User';
import { Form, Button } from 'reactstrap';


class App extends React.Component {
  constructor() {
    console.log('const');
    super();
      this.state = {
        login: {}
       // search: {}
       };
  }

  componentDidMount() {
    console.log('CDU');
     this.fetchUser('hdnye')
  };

//   componentDidUpdate(prevProps, prevState) {
//     if(prevState.login !== this.state.login) {
//       this.setState({
//        login: prevProps.login
//      })}  else {  
//      this.fetchUser('')
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

//   submitHandler = event => {
//   event.preventDefault();
//     this.state.search.filter(login => {
//       return login.name.toLowerCase() !== -1;
//   });
//      this.setState({ search: event.target.value });
// } 

// handleChange = () => {
//   this.setState({
//     search: ''
//   })
//}


  render() {
    return (
     <div className='App'>
       <h1>GitHub User Card</h1>

        {/* <Form className='Form' onSubmit={this.submitHandler}>
           <label htmlFor='search'></label>
           <input
            type='text'
            name='search'
            value={this.props.search}
            onChange={this.handleChange}
            />
          <Button>Search Users</Button>
         </Form> */}

        <User login={this.state.login} img={this.state.img}/>          
         
        </div>
       )
    }
}

export default App;
