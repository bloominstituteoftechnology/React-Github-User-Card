import React from 'react';
import {
    Form, Label,Input,Button
  } from 'reactstrap';

class Search extends React.Component{
constructor(props){
    super()
    console.log('props in Cards=',props)
    this.state={
        user:""
    }
}

handleChange=(e)=>{
    console.log('im in handleChange=',e.target.value);
    this.setState({
        user:e.target.value
    })
}

handleSubmit=(e)=>{
    e.preventDefault();
    this.props.searchUser(this.state.user);
}

render(){
    return(
        <Form onSubmit={this.handleSubmit}>
          <Label htmlFor="user">Search Github User</Label> 
          <Input id="user"
          name="user"
          type="text"
          onChange={this.handleChange}
          value={this.state.user}></Input>
        </Form>
    )
}
}

export default Search;
