import React from 'react';
import axios from 'axios';

class UserCards extends React.Component {
constructor(props) {
  super(props);
  this.state={
    user: []
  }
}

  componentDidMount() {
    axios.get(`https://api.github.com/users/mzteepowell`)
        .then(res => {
            this.setState({
              user: [...this.state.user, res.data]
            })
        })
        .catch(err => {
            console.log(err);
        })
  }
  render(){
    return(
      <div className='cards'>
        <div className='card'>
          
        </div>
      </div>
    )
  }
}

export default UserCards;