
import React from 'react';

import axios from 'axios'
import Card from '../src/Card'
const myUrl = 'https://api.github.com/users/tim-mock'

class App extends React.Component {
constructor () {
 super()
 this.state = {
   gdata: ''
 }
}

componentDidMount() {
 axios 
  .get(myUrl)
  .then( res => {
    
    this.setState({
      gdata: res.data
    })
  })
  .catch(err => console.log(err))
}

render () {
  
 return (
   <div className="App">
    <h1> GitHub Card APP {console.log('this state', this.state.gdata)}</h1>
 <Card data={this.state.gdata} />
 </div>
 );
}
}

export default App;