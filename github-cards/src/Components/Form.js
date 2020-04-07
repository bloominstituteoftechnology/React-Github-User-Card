import React from 'react'


class Form extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state ={text:""}
  }

  handleChange = (event) =>
  {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) =>
  {
    e.preventDefault()
    this.props.searchUser(e, this.state.text)
    this.setState({
      text: ""
    })  
  }

  render()
  {
    return (

      <div>
        <form onSubmit={this.handleSubmit} action="">
          <input name="text"
            type="text"
            onChange={this.handleChange}
            placeholder="UserName"
            value={this.state.text} />
          <button onClick={this.handleSubmit}  >Find User</button>
          <br/>
          <br/>

        </form>
        {/* <p>{this.props.todo.task}</p> */}
      </div>
    )
  }
}

export default Form